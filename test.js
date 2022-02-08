const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const iconv = require('iconv-lite');

const url = 'https://movie.douban.com/cinema/later/beijing/';

https.get(url, function (res) {
  let chunks = [];
  res.on('data', function (chunk) {
    chunks.push(chunk);
  });
  res.on('end', () => {
    let allFiles = [];
    let html = iconv.decode(Buffer.concat(chunks), 'utf-8');
    let $ = cheerio.load(html);
    $('#showing-soon .item').each(function () {
      const title = $('.intro h3 a', this).text();
      const data = $('.intro ul li', this).eq(0).text();
      const type = $('.intro ul li', this).eq(1).text();
      const notice = $('ul a', this).attr('href') || null;
      allFiles.push({
        title,
        data,
        type,
        notice,
      });
    });
    console.log(allFiles);
    fs.writeFile('./fils.json', JSON.stringify(allFiles), function (err) {
      if (!err) {
        console.log('文件写入完毕');
      }
    });
  });
});
