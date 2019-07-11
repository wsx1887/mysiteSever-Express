
var express = require("express");
var router = express.Router();
var userRouter = require("./movieSite/userRoutes");
var adminRouter = require('./movieSite/adminRoutes');
var indexRouter = require('./movieSite/indexRoutes');
const ZhihuProxyRouter = require('./proxy/proxy.js');
const myworkRouter = require('./mywork/myworkRouter.js');

router.use('/movie', indexRouter);
router.use("/movie/user", userRouter);
router.use('/movie/admin', adminRouter);

router.use('/proxy', ZhihuProxyRouter);
router.use('/mywork', myworkRouter);

module.exports = router;