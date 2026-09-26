import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        // Change this back to 5000 (or 3000) where your Node backend is actually listening!
        target: "http://localhost:5000", 
        changeOrigin: true,
      },
    },
  },
});
