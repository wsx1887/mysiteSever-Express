
var express = require("express");
var router = express.Router();
var userRouter = require("./movieSite/userRoutes");
var adminRouter = require('./movieSite/adminRoutes');
var indexRouter = require('./movieSite/indexRoutes');
const ZhihuProxyRouter = require('./proxy/proxy.js');
const myworkRouter = require('./mywork/myworkRoutes.js');
const vueappRouter = require('./vueapp/userRoutes.js');

router.use('/movie', indexRouter);
router.use("/movie/user", userRouter);
router.use('/movie/admin', adminRouter);

router.use('/proxy', ZhihuProxyRouter);
router.use('/mywork', myworkRouter);
router.use('/vueapp', vueappRouter);

module.exports = router;