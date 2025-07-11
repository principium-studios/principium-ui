import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    include: ["**/*.test.?(c|m)[jt]s?(x)"],
  },
});
