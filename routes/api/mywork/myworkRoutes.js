var router = require('express').Router();
var axios=require('axios');

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


module.exports = router;