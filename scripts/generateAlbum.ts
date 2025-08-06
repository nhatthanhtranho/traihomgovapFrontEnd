import * as fs from 'fs';
import * as path from 'path';

const inputDir = path.resolve(__dirname, '../public/assets/images/album');
const outputFile = path.resolve(__dirname, '../src/data/album.json');

function generateAlbumJson() {
  if (!fs.existsSync(inputDir)) {
    console.error('❌ Input directory not found:', inputDir);
    return;
  }

  const files = fs.readdirSync(inputDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext); // filter image types
  });

  const data = files.map(file => ({
    src: `/assets/images/album/${file}`,
  }));

  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Successfully generated ${outputFile} with ${files.length} entries.`);
}

generateAlbumJson();
