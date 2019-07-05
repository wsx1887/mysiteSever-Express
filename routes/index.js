var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});
router.get("/zhihuribao",function(req,res,next){
  res.render("知乎日报网页版.html");
});
router.get('/shopping/?*?',function(req,res,next){
res.render('电商网站实例.html');
});
router.get('/vueapp/?*?',function(req,res,next){
  res.render('个人练习VUE版.html');
  })

module.exports = router;
