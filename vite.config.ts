import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./config",
  plugins: [react()],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
