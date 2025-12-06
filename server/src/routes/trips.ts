import express, { Response } from "express";
import { db } from "../db/database.js";
import { AuthenticatedRequest, requireAuth } from "../middleware/auth.js";

const router = express.Router();

// POST /api/trips - Create a new trip
router.post("/", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, country, countryId, items, routeMetrics } = req.body;

    if (!name || !country || !countryId || !items) {
      return res.status(400).json({ error: "Missing required fields: name, country, countryId, items" });
    }

    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const trip = await db.createTrip(req.userId, {
      name,
      country,
      countryId,
      items,
      routeMetrics,
    });

    res.status(201).json({ trip });
  } catch (error) {
    console.error("Error creating trip:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/trips - Get all trips for the authenticated user
router.get("/", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const trips = await db.getTripsByUserId(req.userId);
    // Ensure we always return an array, even if empty
    res.json({ trips: trips || [] });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/trips/:id - Get a specific trip
router.get("/:id", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const trip = await db.getTripById(req.params.id, req.userId);
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ trip });
  } catch (error) {
    console.error("Error fetching trip:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/trips/:id - Delete a trip
router.delete("/:id", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = await db.deleteTrip(req.params.id, req.userId);
    if (result.count === 0) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ message: "Trip deleted successfully" });
  } catch (error) {
    console.error("Error deleting trip:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

