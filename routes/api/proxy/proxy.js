/*
知乎日报API：   https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
1、最新消息：   https://news-at.zhihu.com/api/4/news/latest
2、文章详情：   https://news-at.zhihu.com/api/4/news/9711366
3、每日推荐：   https://news-at.zhihu.com/api/4/news/before/20131119
4、额外信息：   https://news-at.zhihu.com/api/4/story-extra/9711366
5、长评论：     https://news-at.zhihu.com/api/4/story/8997528/long-comments
6、短评论：     https://news-at.zhihu.com/api/4/story/4232852/short-comments
7、热门消息：   https://news-at.zhihu.com/api/3/news/hot
*/
const express = require('express');
const request = require('request');

var router = express.Router();

//基地址为：{{host}}/api/proxy
router.get('/test', function (req, res, next) {
    /*res.set({
        'content-type':'application/json; charset=UTF-8'
    });*/
    res.send("sdsfdsd");
});
router.get('/*', function (req, res, next) {
    var url = req.url.substring(1);
    var options = {
        url: url,
        encoding: null
    }
    request.get(options, function (err, res1, body) {
        if (!err && res1.statusCode === 200) {
            //var contentType = res1.get;
            //console.log(res1.headers);
            //console.log(contentType);
            //res.setHeader('content-type', contentType);
            //res.setHeader('access-control-allow-origin', '*');      
            //console.log(res1.headers);
            res.set({
                'access-control-allow-origin': '*',
                'content-type': res1.headers['content-type']
            });
            res.send(body);
        }
    });
})
/*
router.get('/:id', function (req, res, next) {
    console.log(req.params.id);
})
*/

module.exports = router;
