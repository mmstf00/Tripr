import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { db } from "./db/database";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "3001", 10);

app.use(cors({
  // TODO: Add these to property files
  origin: ["http://192.168.0.212", "http://localhost:8080"],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API routes
app.use("/api/auth", authRoutes);

// Start cleanup interval for expired sessions
db.startCleanupInterval();

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://192.168.0.212:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
