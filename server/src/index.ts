import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { db } from "./db/database.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "3001", 10);

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()).filter(Boolean)
    : ["http://localhost:8080"],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Root route - prevent source code exposure
app.get("/", (_req, res) => {
  res.status(200).json({ message: "API Server" });
});

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API routes
app.use("/api/auth", authRoutes);

// Catch-all 404 handler - prevent source code exposure
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});


export { app };

// Only start the server if this file is run directly
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // Start cleanup interval for expired sessions only when running as a long-lived server
  db.startCleanupInterval();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });
}
