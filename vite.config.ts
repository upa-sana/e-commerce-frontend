import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": "/src/api",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@shared": "/src/shared",
      "@utils": "/src/utils",
      "@layout": "/src/layout",
    },
  },
});
