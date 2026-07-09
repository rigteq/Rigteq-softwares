const { Jimp } = require("jimp");

async function main() {
  try {
    const image = await Jimp.read("src/app/icon.png");
    image.circle();
    await image.write("src/app/icon.png");
    console.log("Image successfully cropped to circle");
  } catch (err) {
    console.error("Error cropping image:", err);
  }
}

main();
