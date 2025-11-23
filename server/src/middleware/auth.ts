import { NextFunction, Request, Response } from "express";
import { db } from "../db/database";

export interface AuthenticatedRequest extends Request {
  userId?: string;
  sessionId?: string;
}

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const sessionId = req.cookies?.sessionId;

  if (!sessionId) {
    return res.status(401).json({ error: "Unauthorized: No session" });
  }

  const session = await db.getSession(sessionId);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized: Invalid or expired session" });
  }

  req.userId = session.userId;
  req.sessionId = sessionId;
  next();
}

export async function optionalAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const sessionId = req.cookies?.sessionId;

  if (sessionId) {
    const session = await db.getSession(sessionId);
    if (session) {
      req.userId = session.userId;
      req.sessionId = sessionId;
    }
  }

  next();
}

