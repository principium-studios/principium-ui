import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { Command } from "commander";
import { generateCss, loadConfig } from "./utils";

// _________________ CLI _________________
const program = new Command()
  .name("principium-cli")
  .description(
    "Global CLI for Principium: generating theme, initializing project, adding components"
  )
  .version("0.1.0");

// Theme generation command
program
  .command("generate-theme")
  .description("Generate themes.css from principium.json")
  .option(
    "-c, --config <glob>",
    "glob pattern for principium config",
    "principium.json"
  )
  .option("-o, --output <path>", "output CSS file", "src/themes.css")
  .action((opts) => {
    const cfg = loadConfig(opts.config);
    const css = generateCss(cfg);
    const outPath = path.resolve(process.cwd(), opts.output);
    const outDir = path.dirname(outPath);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    writeFileSync(outPath, css, "utf-8");
    console.log(`✅ themes.css generated at ${opts.output}`);
  });

program.parse(process.argv);
