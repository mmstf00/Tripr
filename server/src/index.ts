import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import https from "https";
import selfsigned from "selfsigned";
import { db } from "./db/database";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "3001", 10);

// Middleware
const isAndroid = process.env.NODE_ENV === "android";

app.use(
  cors({
    origin: isAndroid
      ? true  // Allow all origins in development
      : (process.env.FRONTEND_URL || "http://localhost:8080"),
    credentials: true,
    // Allow cookies to be sent
    exposedHeaders: ["Set-Cookie"],
  })
);
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

// Create HTTPS server with self-signed certificate in android environment
if (isAndroid) {
  const pems = selfsigned.generate(
    [
      { name: "commonName", value: "192.168.0.212" },
    ],
    {
      keySize: 2048,
      days: 365,
      algorithm: "sha256",
      extensions: [
        {
          name: "subjectAltName",
          altNames: [
            { type: 2, value: "192.168.0.212" },
            { type: 2, value: "localhost" },
          ],
        },
      ],
    }
  );

  const httpsServer = https.createServer(
    {
      key: pems.private,
      cert: pems.cert,
    },
    app
  );

  httpsServer.listen(PORT, "0.0.0.0", () => {
    console.log(`HTTPS Server running on https://0.0.0.0:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`Access via: https://192.168.0.212:${PORT}`);
  });
} else {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });
}
