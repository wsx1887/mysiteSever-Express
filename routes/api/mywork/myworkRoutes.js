var router = require('express').Router();
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
    sendEmail.sendEmailOne(req.body).then(info => {
        res.status(200).send({ finishType: 1, message: '发送成功' });
    }).catch(err => {
        res.status(200).send({ finishType: 0, message: err });
    });
});

module.exports = router;