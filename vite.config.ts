import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine which environment file to use
  let envFile = ".env.development";
  if (mode === "android") {
    envFile = ".env.android";
  } else if (mode === "production") {
    envFile = ".env.production";
  }

  return {
    server: {
      host: "::",
      port: 8080,
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
        "Cross-Origin-Embedder-Policy": "unsafe-none",
      },
    },
    plugins: [react()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    envPrefix: "VITE_",
    envFile,
  };
});