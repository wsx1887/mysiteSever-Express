var express=require('express');
var router=express.Router();
var http=require('http');

router.get('/',function(req,res,next){
    res.send('此链接用于测试');
})
router.get('/chlodmanonTest',function(req,res,next){
    var goodUrl='http://chlodmanon.com/product/fggggggg/18';
    var badUrl='http://chlodmanon.com/product/fggggggg/17';
    var goodOption={
        hostname:'chlodmanon.com',
        path:'/product/fggggggg/16',
        timeout:3000
    }
    //res.set('content-type',"text/html; charset=utf-8");
    const goodReq=http.request(goodOption,(goodRes)=>{
        //console.log(`响应码：${goodRes.statusCode}`);
        //console.log(`请求头：${JSON.stringify(goodRes.headers)}`);
        goodRes.destroy();
    })
    goodReq.on('error',(err)=>{
        console.log(err);
    });
    goodReq.on('timeout',()=>{
        console.log('timeout');
    })
    goodReq.end();
    //console.log('发送完成');
    //res.json({goodUrl,badUrl});
});
router.all('/getreq',function(req,res,next){
    //res.append("access-control-allow-origin","*");
    //console.log(req);
    //console.log(Object.keys(req.body));
    res.send(req.body);
})
module.exports=router;