import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  envDir: "./config",
  plugins: [react()],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
    setupFiles: "./src/test/setup.ts",
  },
});
