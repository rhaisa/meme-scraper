const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request(
  {
    uri: 'https://memegen.link/examples',
  },
  function(error, response, html) {
    console.log(html);
    const rhaisa = cheerio.load(html);
    const imageList = rhaisa('img');
    console.log('###########################');
    console.log(imageList);

    fs.mkdir('images', { recursive: true }, function(error) {
      if (error) {
        console.error('An error occurred:', error);
      } else {
        console.log('Your directory was created');
      }
    });
  },
);

// getImageUrls('https://memegen.link/examples', function(err, images) {
//   console.debug(err, images);
// if (!err) {
//   console.log('Images found', images.length);
//   console.log(images);
// } else {
//   console.log('ERROR', err);
// }
// });
