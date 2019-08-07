var router = require('express').Router();
const fs = require('fs');
//var axios=require('axios');

let sendEmail = require('./methods/sendEmail.js');
var testlinkArray = require('./methods/testlink.js');

router.post('/testlink', async function (req, res, next) {
    let results = [];
    if (req.body instanceof Array && req.body.length > 0) {
        //console.log(req.body);
        results = await testlinkArray(req.body.filter(item => item != ""));
    }
    //console.log(results);
    res.send(results);
});
router.post('/getimgurls', async function (req, res, next) {

});
router.post('/sendemail', function (req, res, next) {
    /*  sendEmail.sendEmailArrayOnebyone(req.body).then(resArray=>{
          //console.log(resArray);
          res.status(200).send('发送成功');
      }).catch(err=>{
          console.log(err);
          res.status(200).send(err);
      }); */
    if (req.body.password !== 'lqosoxejsxjjbeaf') {
        res.send({ finishType: 2, message: '授权码不正确' });
        return;
    }
    sendEmail.sendEmailOne(req.body.message).then(info => {
        res.status(200).send({ finishType: 0, message: '发送成功' });
    }).catch(err => {
        console.log(req.body);
        res.status(200).send({ finishType: 1, message: err });
    });
});
router.post('/readdir', function (req, res, next) {
    let dir = req.body.dir;
    let filePathArray = fs.readdirSync(dir);
    res.send(filePathArray);
});
module.exports = router;