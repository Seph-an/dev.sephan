#!/usr/bin/env node
import { removeBackground } from "@imgly/background-removal-node";
import { promises as fs } from "fs";
import path from "path";

async function main() {
  const [, , inputArg, outputArg] = process.argv;

  if (!inputArg || !outputArg) {
    console.error(
      "Usage: node scripts/remove-background.mjs <input> <output>",
    );
    process.exit(1);
  }

  const inputPath = path.resolve(inputArg);
  const outputPath = path.resolve(outputArg);

  try {
    const result = await removeBackground(inputPath, {
      output: {
        format: "image/png",
        quality: 0.9,
        type: "foreground",
      },
    });

    const arrayBuffer = await result.arrayBuffer();
    await fs.writeFile(outputPath, Buffer.from(arrayBuffer));

    console.log(`Background removed: ${outputPath}`);
  } catch (error) {
    console.error("Failed to remove background:", error);
    process.exit(1);
  }
}

main();
