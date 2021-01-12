const firebase = require('./firebase').firebase.get();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const rimraf = require('rimraf');
const compress_images = require('compress-images')

const FULLSIZE_IMAGE_LOCATION = path.resolve(__dirname, "images_temp")
const COMPRESSED_IMAGE_LOCATION = FULLSIZE_IMAGE_LOCATION + "/compressed/"

if (!fs.existsSync(FULLSIZE_IMAGE_LOCATION)) {
  fs.mkdirSync(FULLSIZE_IMAGE_LOCATION);
} else {
  rimraf.sync(FULLSIZE_IMAGE_LOCATION);
  fs.mkdirSync(FULLSIZE_IMAGE_LOCATION);
}

let bucket = firebase.storage().bucket();

// downloads an image and compresses it
const downloadAndCompress = (properties, url) => {
  return new Promise(async (resolve, reject) => {
    let filename = properties.name.replace(/\s+/g, '-').toLowerCase() + '.jpg';
    let filepath = path.resolve(FULLSIZE_IMAGE_LOCATION, filename);

    let writer = fs.createWriteStream(filepath)
    let response = await axios.get(url, { responseType: 'stream' })
    response.data.pipe(writer);
    writer.on('finish', () => {
      compress_images(filepath.replace(/\\/g, '/'), COMPRESSED_IMAGE_LOCATION.replace(/\\/g, '/'), { compress_force: false, statistic: true, autoupdate: false }, true,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '50'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, (err, complete, stat) => {
          if (complete) {
            resolve([filename, COMPRESSED_IMAGE_LOCATION + "/" + filename]);
          }
        })
    })
  })
}

// upload image to firebase and return URL
const uploadToFirebase = async (filename, location) => {
  return new Promise((resolve, reject) => {
    const options = {
      destination: `member_images/${filename}`,
      resumable: true,
      validation: 'crc32c',
      includeFiles: true,
      public: true,
    }
    bucket.upload(location, options, (err, file) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log('Successfully uploaded ' + filename);
        resolve(file.publicUrl());
      }
    })
  })
}

const cleanUp = () => {
  rimraf(FULLSIZE_IMAGE_LOCATION);
}

module.exports = {
  downloadAndCompress,
  uploadToFirebase,
  cleanUp,
}