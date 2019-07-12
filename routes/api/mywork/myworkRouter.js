var router = require('express').Router();

var Testlink=require('./methods/testlink.js');

router.post('/testlink', (req, res, next) => {
    if (req.body instanceof Array && req.body.length > 0) {
        Testlink(['http://chlodmanon.com/product/fggggggg/18']);
    }
    res.send(['return']);
});


module.exports = router;