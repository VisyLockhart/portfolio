// 由頭像產生 favicon、apple-touch-icon 與分享預覽圖(OG)。執行:node scripts/make-images.mjs
import sharp from 'sharp';

const avatarOld = 'src/assets/avatar-old.jpg';
const avatarNew = 'src/assets/avatar-new.png';

for (const [file, size] of [['public/favicon-32.png', 32], ['public/favicon-192.png', 192], ['public/apple-touch-icon.png', 180]]) {
  await sharp(avatarOld).resize(size, size, { fit: 'cover' }).png().toFile(file);
}

// 1200x630 分享預覽圖:左側姓名與定位(僅用拉丁字元,避免缺字),右側插圖
const art = await sharp(avatarNew).resize({ width: 440 }).png().toBuffer();
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#eef4fc"/>
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#002050" stroke-width="8"/>
  <text x="80" y="260" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="84" fill="#002050">Visy Lockhart</text>
  <text x="80" y="340" font-family="DejaVu Sans, Arial, sans-serif" font-size="36" fill="#0a6cc8">Full-stack developer</text>
  <text x="80" y="392" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" fill="#3a5a8a">.NET · Angular</text>
  <text x="80" y="540" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" fill="#002050">portfolio.aequoreranos.com</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: art, left: 700, top: 150 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');
console.log('images ok');
