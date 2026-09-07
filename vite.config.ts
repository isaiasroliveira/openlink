import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { copyFile } from "node:fs/promises";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "static-not-found",
      async writeBundle() {
        await copyFile(new URL("./dist/index.html", import.meta.url), new URL("./dist/404.html", import.meta.url));
      },
    },
  ],
  test: { environment: "jsdom", include: ["src/tests/**/*.test.tsx"], restoreMocks: true },
});
