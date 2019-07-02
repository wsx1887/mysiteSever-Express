var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression=require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter=require('./test/testRoutes.js');

var apiRoutes = require("./routes/api/apiRoutes.js");

var app = express();

// view engine setup
/* 这是支持跨域请求的。
app.all('',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-headers','Content-Type, Content-length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  if(req.method=='OPTIONS'){
    res.send(200);
  }else{
    next();
  }
});*/
app.set('views', path.join(__dirname, 'views'));
//支持静态html
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//启用压缩
app.use(compression())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRoutes);
app.use('/test',testRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
