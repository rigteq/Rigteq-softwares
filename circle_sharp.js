const sharp = require('sharp');
const fs = require('fs');

async function processIcon() {
  try {
    const inputPath = 'src/app/icon.png';
    const outputPath = 'src/app/icon_circle.png';
    
    // Get image metadata to find size
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width || 512, metadata.height || 512);
    const radius = size / 2;
    
    const circleSvg = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${radius}" cy="${radius}" r="${radius}" fill="#fff" />
      </svg>`
    );

    await sharp(inputPath)
      .resize(size, size)
      .composite([{
        input: circleSvg,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
      
    console.log('Successfully created circular icon.');
    
    // Replace original icon with the circular one
    fs.copyFileSync(outputPath, inputPath);
    console.log('Replaced src/app/icon.png with circular version.');
    
  } catch (err) {
    console.error('Error processing image with sharp:', err);
  }
}

processIcon();
