import { randomBytes } from "crypto";
import express, { Response, Router } from "express";
import { db } from "../db/database.js";
import { AuthenticatedRequest, requireAuth } from "../middleware/auth.js";
import { fetchGoogleUserInfo, validateGoogleToken } from "../services/googleAuth.js";

const router = Router();

const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

// POST /api/auth/login
// Validates Google token and creates a session
router.post("/login", async (req: express.Request, res: Response) => {
  try {
    const { accessToken } = req.body;

    if (!accessToken) {
      return res.status(400).json({ error: "Access token is required" });
    }

    // Validate token with Google
    const tokenInfo = await validateGoogleToken(accessToken, GOOGLE_CLIENT_ID);

    if (!tokenInfo) {
      return res.status(401).json({ error: "Invalid or expired Google token" });
    }

    // Fetch complete user info
    const userInfo = await fetchGoogleUserInfo(accessToken);

    if (!userInfo) {
      return res.status(401).json({ error: "Failed to fetch user information" });
    }

    // Find or create user
    let user = await db.getUserByEmail(userInfo.email);

    if (!user) {
      // Create new user
      user = await db.createUser({
        id: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
      });
    } else {
      // Update user info if changed
      if (user.name !== userInfo.name || user.picture !== userInfo.picture) {
        user = await db.updateUser(user.id, {
          name: userInfo.name,
          picture: userInfo.picture,
        });
      }
    }

    if (!user) {
      return res.status(500).json({ error: "Failed to create or update user" });
    }

    // Create session
    const sessionId = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

    await db.createSession(sessionId, user.id, expiresAt);

    // Set httpOnly cookie
    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_DURATION_MS,
      path: "/",
    });

    // Return user data (without sensitive info)
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/auth/me
// Get current authenticated user
router.get("/me", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await db.getUserById(req.userId!);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/auth/validate
// Validate token (for frontend token validation)
router.post("/validate", async (req: express.Request, res: Response) => {
  try {
    const { accessToken } = req.body;

    if (!accessToken) {
      return res.status(400).json({ error: "Access token is required" });
    }

    const tokenInfo = await validateGoogleToken(accessToken, GOOGLE_CLIENT_ID);

    if (!tokenInfo) {
      return res.json({ valid: false });
    }

    res.json({ valid: true, tokenInfo });
  } catch (error) {
    console.error("Validate token error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/auth/logout
// Logout and clear session
router.post("/logout", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (req.sessionId) {
      await db.deleteSession(req.sessionId);
    }

    // Clear cookie
    res.clearCookie("sessionId", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

