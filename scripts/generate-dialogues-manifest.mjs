import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGE_COUNT = 21;
const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/digital-risk-dialogues",
);
const MANIFEST_PATH = path.join(
  process.cwd(),
  "lib/dialogues/manifest.json",
);

const DEFAULT_WIDTH = 2400;
const DEFAULT_HEIGHT = 1600;

const images = [];

for (let index = 1; index <= IMAGE_COUNT; index += 1) {
  const filename = `${String(index).padStart(2, "0")}.jpg`;
  const filePath = path.join(IMAGE_DIR, filename);
  const src = `/images/digital-risk-dialogues/${filename}`;

  if (fs.existsSync(filePath)) {
    const metadata = await sharp(filePath).metadata();
    images.push({
      src,
      width: metadata.width ?? DEFAULT_WIDTH,
      height: metadata.height ?? DEFAULT_HEIGHT,
      alt: `Digital Risk Dialogues photograph ${filename}`,
    });
  } else {
    images.push({
      src,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      alt: `Digital Risk Dialogues photograph ${filename}`,
    });
  }
}

const manifest = {
  generatedAt: new Date().toISOString(),
  images,
  ogImage: "/images/digital-risk-dialogues/05.jpg",
};

fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Wrote ${images.length} entries to ${MANIFEST_PATH}`);
