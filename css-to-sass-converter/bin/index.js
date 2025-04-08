#!/usr/bin/env node
import { convertCssToScss } from '../lib/converter.js';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("❌ Usage: css2sass <input.css> [output.scss]");
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1] || inputFile.replace(/\.css$/, '.scss');

if (!fs.existsSync(inputFile)) {
  console.error("❌ Input file does not exist.");
  process.exit(1);
}

convertCssToScss(inputFile, outputFile);
