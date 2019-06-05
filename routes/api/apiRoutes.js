
var express=require("express");
var router=express.Router();
var userRouter=require("./movieSite/userRoutes");
var adminRouter=require('./movieSite/adminRoutes');
var indexRouter=require('./movieSite/indexRoutes');
const ZhihuProxyRouter=require('./proxy/proxy.js');

router.use('/movie',indexRouter);
router.use("/movie/user",userRouter);
router.use('/movie/admin',adminRouter);

router.use('/proxy',ZhihuProxyRouter);

module.exports=router;