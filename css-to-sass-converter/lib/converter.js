import fs from 'fs';
import path from 'path';

export function convertCssToScss(inputPath, outputPath) {
  let css = fs.readFileSync(inputPath, 'utf8');

  // 🔄 Replace `var`-like patterns (optional enhancement)
  css = css.replace(/var\(--([\w-]+)\)/g, '\$--$1');

  // 🪄 Replace semicolons (optional cleanup)
  const scss = css.replace(/;\s*}/g, '}');

  fs.writeFileSync(outputPath, scss, 'utf8');
  console.log(`✅ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
}
