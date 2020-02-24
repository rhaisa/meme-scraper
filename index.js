const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
// const download = require('image-downloader');
function download(image, index) {
  console.log('https://memegen.link' + image);
  const link = 'https://memegen.link' + image;
  const filename = 'images/meme-' + index + '.jpg';
  console.log('filename: ' + filename);
  request(link).pipe(fs.createWriteStream(filename));
}
request(
  {
    uri: 'https://memegen.link/examples',
  },
  function(error, response, html) {
    //console.log(html);
    const $ = cheerio.load(html);
    const imageList = $('img');
    //console.log(imageList);

    fs.mkdir('images', { recursive: true }, function(error) {
      if (error) {
        console.error('An error occurred:', error);
      } else {
        console.log('Your directory was created');

        for (let index = 0; index < 10; index++) {
          download(imageList[index].attribs.src, index);
        }
      }
    });
  },
);

//The index currentValue in the array.
// for (let i = 0; i < items.length; i++) {copy.push(items[i])}
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//   if (err) throw err;});
