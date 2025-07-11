import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts", // → dist/index.(js|mjs|d.ts)
    "src/hooks/index.ts", // → dist/hooks/index.(js|mjs|d.ts)
    "src/components/index.ts", // → dist/components/index.(js|mjs|d.ts)
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  outDir: "dist",
});
