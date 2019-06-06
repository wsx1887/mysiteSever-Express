var express=require('express');
var router=express.Router();
var http=require('http');

router.get('/',function(req,res,next){
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
})

module.exports=router;