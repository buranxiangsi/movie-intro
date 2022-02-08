# movie-intro

ndoejs 爬取 北京即将上映的电影

- [cherrio](https://github.com/cheeriojs/cheerio/wiki/Chinese-README) 为服务器特别定制的快速、灵活、实施的jQuery核心实现
- node https模块  发送get请求，获取内容
- node fs模块  访问文件与文件交互
- [iconv-lite](https://www.npmjs.com/package/iconv-lite)  转码

使用 
`node test.js`

数据存储在filse.json 文件
```
{
    "title": "十年一品温如言",
    "data": "02月14日",
    "type": "剧情 / 爱情",
    "notice": "https://movie.douban.com/trailer/285558/#content"
  },
...

```
