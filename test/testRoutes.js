var express = require('express');
var router = express.Router();
var http = require('http');
const jwt=require('jsonwebtoken');
var userModel=require('../models/vueapp/userModel.js')

router.get('/', function (req, res, next) {
    //res.send('用于测试');
    /* let name="wsx1887";
    let token=jwt.sign({name},'key',{expiresIn:60*60});
    res.send(token); */
    userModel.findOne({name:'134'},(err,doc)=>{
        res.send(doc);
        console.log(doc);
    })
})
router.get('/check',(req,res,next)=>{
    jwt.verify(req.query.token,'key',function(err,decode){
        if(err){
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
router.all('/getreq', function (req, res, next) {
    //res.append("access-control-allow-origin","*");
    //console.log(req);
    //console.log(Object.keys(req.body));
    res.send(req.body);
})

module.exports = router;