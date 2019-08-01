var router = require('express').Router();
//var axios=require('axios');
let emailTransporter=require('../../../common/emailTransporter.js');
let sendEmailArray=require('./methods/sendEmailArray.js');

var testlinkArray=require('./methods/testlink.js');

router.post('/testlink',async function(req, res, next) {
    let results=[];
    if (req.body instanceof Array && req.body.length > 0) {
        //console.log(req.body);
        results=await testlinkArray(req.body.filter(item=>item!=""));
    }
    //console.log(results);
    res.send(results);
});
router.post('/getimgurls',async function(req,res,next){

});
router.post('/sendemail',function(req,res,next){
    sendEmailArray(req.body).then(resArray=>{
        //console.log(resArray);
        res.status(200).send('发送成功');
    }).catch(err=>{
        console.log(err);
        res.status(200).send(err);
    });
/*      let message={
        from:'wsx1887@qq.com',
        to:'547873304@qq.com',
        //subject:'cao',
        //text:'cao dong gua didi'
        html:`<img src="cid:0"/>`,
        attachments:[{
            path:'D:/up/【纳兰性急作品】精致紧身黑裤MM [MP4 234MB] 188.part1 (1).png',
            cid:'0'
        }]
    };
    //console.log('正在发送...');
    emailTransporter.sendMail(message,(err,info)=>{
        if(err){
            res.status(200).send('发送失败<br/>'+err);
        }else{
            res.status(200).send('发送成功');
        }
    });  */
});

module.exports = router;