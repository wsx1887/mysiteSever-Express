var express=require('express');
var router=express.Router();
//电影相关
router.post('/movieAdd',function(req,res,next){

});
//
router.post('/movieDel',function(req,res,next){

});
router.post('/movieUpdate',function(req,res,next){

});
router.get('/movieGetAll',function(req,res,next){

});
//评论相关
router.get('/commentsGetList',function(req,res,next){

});
//审核评论
router.post('/commentCheck',function(req,res,next){

});
router.post('/commentDel',function(req,res,next){

});
//用户相关
//封停
router.post('/userStop',function(req,res,next){

});
router.post('/userPWChange',function(req,res,next){

});
router.post('/userGetAll',function(req,res,next){

});
router.post('/userPowerUpdate',function(req,res,next){

});
//文章相关
router.post('/articleAdd',function(req,res,next){

});
router.post('/articleDel',function(req,res,next){

});
//主页推荐相关
router.post('/RecommendAdd',function(req,res,next){

});
router.post('/RecommendDel',function(req,res,next){

});
router.get('/RecommendGetAll',function(req,res,next){

});
module.exports=router;