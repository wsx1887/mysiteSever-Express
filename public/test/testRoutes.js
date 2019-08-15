var express = require('express');
var router = express.Router();
var http = require('http');
const jwt = require('jsonwebtoken');
var userModel = require('../../models/vueapp/userModel.js')

router.get('/', function (req, res, next) {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.cookie('token', 'dsggd', { maxAge: 60 * 1000, signed: true, httpOnly: true });
    res.redirect('/test/test.html');
})
router.get('/check', (req, res, next) => {
    jwt.verify(req.query.token, 'key', function (err, decode) {
        if (err) {
            console.log(err);
        }
    });
})
router.get('/chlodmanonTest', function (req, res, next) {
    var goodUrl = 'http://chlodmanon.com/product/fggggggg/18';
    var badUrl = 'http://chlodmanon.com/product/fggggggg/17';
    var goodOption = {
        hostname: 'chlodmanon.com',
        path: '/product/fggggggg/20',
        timeout: 3000
    };
    new Promise(function (resolve, reject) {
        const goodReq = http.request(goodOption, resolve);
        //console.log('正在生成promise');
        goodReq.on('error', (err) => {
            console.log(err);
        });
        goodReq.on('timeout', () => {
            console.log('timeout');
        })
        goodReq.end();
    }).then(myResponse => {
        //console.log(myResponse.req.socket._host + myResponse.req.path);
        if (myResponse.statusCode === 200) {
            res.send('商品链接存在！');
        }
        else {
            res.send('商品链接不存在。');
        }
        myResponse.destroy();
    });
    //console.log('已生成promise');
    //res.set('content-type',"text/html; charset=utf-8");
    /* const goodReq=http.request(goodOption,(myResponse)=>{
        //console.log(`响应码：${goodRes.statusCode}`);
        //console.log(`请求头：${JSON.stringify(goodRes.headers)}`);
        if(myResponse.statusCode===200){
            res.send('商品链接存在！');
        }
        else{
            res.send('商品链接不存在。');
        }
        myResponse.destroy();
    })
    goodReq.on('error',(err)=>{
        console.log(err);
    });
    goodReq.on('timeout',()=>{
        console.log('timeout');
    })
    goodReq.end(); */
    //console.log('发送完成');
    //res.json({goodUrl,badUrl});
});
router.all('/test', function (req, res, next) {
    let token = 'test';
    token = jwt.sign({ name: 'xubao' }, 'key', { notBefore: 20 });
    let t;
    t=jwt.verify(req.cookies.token,'key');
    console.log(t);
    res.cookie('token', token);
    res.end();
})

module.exports = router;