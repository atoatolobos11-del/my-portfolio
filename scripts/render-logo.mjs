import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svg = join(root, 'src', 'assets', 'logo.svg');

// Full logo with text -> src/assets/logo.png and public/logo.png
await sharp(svg)
  .resize({ width: 640 })
  .png()
  .toFile(join(root, 'src', 'assets', 'logo.png'));

await sharp(svg)
  .resize({ width: 640 })
  .png()
  .toFile(join(root, 'public', 'logo.png'));

// Favicon: crop to the monogram (circle) only using known geometry
const OUT_W = 640;
const scale = OUT_W / 320; // viewBox width 320
const cx = 160;
const cy = 150;
const outerR = 108 + 7 / 2;
const side = Math.round(2 * outerR * scale);
const left = Math.round((cx - outerR) * scale);
const top = Math.round((cy - outerR) * scale);

const resizedPng = await sharp(svg).resize({ width: OUT_W }).png().toBuffer();

await sharp(resizedPng)
  .extract({ left, top, width: side, height: side })
  .resize(256, 256, { fit: 'cover' })
  .png()
  .toFile(join(root, 'public', 'favicon.png'));

console.log(`logo.png + favicon.png generated (crop ${left},${top} ${side}x${side})`);
