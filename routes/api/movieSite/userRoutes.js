
var express = require("express");
var router = express.Router();
var crypto = require("crypto");// 加密
var userModel = require("../../../models/movieSite/userModel");
var commentModel = require("../../../models/movieSite/commentModel");
//var movieModel=require("../../models/movieSite/movieModel");
var mailModel = require("../../../models/movieSite/mailModel");
const init_token = "xubao";


router.get('/', function (req, res, next) {
    res.send("电影用户页面");
})
//登陆
router.post('/login', function (req, res, next) {
    if (!CheckText(req.body.userName, "userName")) {
        res.json({ status: 1, message: '用户名不符合规范' });
        return;
    }
    if (!CheckText(req.body.passWord, "passWord")) {
        res.json({ status: 2, message: '密码不符合规范' });
        return;
    }
    userModel.find({ userName: req.body.userName, passWord: req.body.passWord }, function (err, userSave) {
        if (userSave.length != 0) {
            var token = GetMD5Password(userSave[0]._id);
            res.json({ status: 0, data: { token: token, user: userSave }, message: "登陆成功" });
        } else {
            res.json({ status: 1, message: "用户名或密码错误" });
            return;
        }
    });
});
//注册
router.post('/register', function (req, res, next) {
    if (!CheckText(req.body.userName, "userName")) {
        res.json({ status: 1, message: '用户名不符合规范' });
        return;
    }
    if (!CheckText(req.body.passWord, "passWord")) {
        res.json({ status: 2, message: '密码不符合规范' });
        return;
    }
    if (!CheckText(req.body.userMail, "userMail")) {
        res.json({ status: 3, message: '邮箱不符合规范' });
        return;
    }
    if (!CheckText(req.body.userPhone, "userPhone")) {
        res.json({ status: 4, message: '电话不符合规范' });
        return;
    }
    userModel.find({ userName: req.body.userName }, function (err, docs) {
        if (docs.length != 0) {
            res.json({ status: 5, message: '用户名已注册' });
            return;
        } else {
            var registerUser = new userModel({
                userName: req.body.userName,
                passWord: req.body.passWord,
                userMail: req.body.userMail,
                userPhone: req.body.userPhone,
                userAdmin: 0,
                userPower: 0,
                userStop: 0
            });
            registerUser.save(function () {
                res.json({ status: 0, message: '注册成功' });
            })
        }
    })
});
//评论
router.post('/postComment', function (req, res, next) {
    if (!checkLogin(req.body.token, req.body.user._id)) {
        res.json({ status: 1, message: "请先登陆" });
        return;
    } else if (!req.body.comment.context) {
        res.json({ status: 1, message: "评论内容为空" });
        return;
    } else {
        var saveComment = new commentModel({
            movie_id: req.body.movie_id,
            userName: req.body.user.userName,
            title: req.body.comment.title,
            context: req.body.comment.context,
            check: 0
        });
        saveComment.save(function (err) {
            if (err) {
                res.json({ status: 1, message: "提交失败，请稍后重试" });
                return;
            } else {
                res.json({ status: 0, message: "评论成功" });
            }
        });
    }
});
//找回密码
router.post('/findPassword', function (req, res, next) {
    res.send("此功能未实现，请直接发Email联系");
});
//修改密码
router.post('/changePassword', function (req, res, next) {
    if (!req.body.token || req.body.token != GetMD5Password(req.body.user._id)) {
        res.json({ status: 1, message: "请先登陆" });
        return;
    } else {
        userModel.find({ _id: req.body.user._id, passWord: req.body.user.passWord }, function (err, userData) {
            if (!userData) {
                res.json({ status: 1, message: "原密码错误" });
                return;
            } else {
                userModel.update({ _id: req.body.user._id }, { passWord: req.body.user.repassword }, function (err, userData) {
                    if (userData) {
                        res.json({ status: 0, message: "更改成功" });
                    } else {
                        res.json({ status: 1, message: "更改失败" });
                    }
                });
            }
        });
    }
});
//发送站内信
router.post('/sendEmail', function (req, res, next) {
    if (checkLogin(req.body.token, req.body.user._id)) {
        userModel.find({userName:req.body.toUser},function(err,userData){
            if(userData){
                var mail = new mailModel({
                    fromUser: req.body.user.userName,
                    toUser: req.body.toUser,
                    title: req.body.title,
                    context: req.body.context
                });
                mail.save(function(err){
                    if(err){
                        res.json({status:1,message:"发送失败"});
                    }else{
                        res.json({status:0,message:"发送成功"});
                    }
                });
            }else{
                res.json({status:1,message:"发送的用户不存在"});
            }
        })
    }
});
router.post("/showEmail",function(req,res,next){
    if(checkLogin(req.body.token,req.body.user._id)){
        mailModel.find({toUser:req.body.user.userName},function(err,mailData){
            if(mailData){
                res.json({status:0,message:"获取成功",data:mailData});
            }else{
                res.json({status:1,message:"获取失败"});
            }
        });
    }else{
        res.json({status:1,message:"请登陆"});
    }
});
//猎取md5值
function GetMD5Password(id) {
    var md5 = crypto.createHash('md5');
    var token_before = id + init_token;
    return md5.update(token_before).digest('hex');
}
//检查提交的字符是不是正确,用于注册和登陆
function CheckText(text, checkType) {
    if (checkType === "userName") {
        if (text) {
            return true;
        }
    } else if (checkType === "passWord") {
        if (text) {
            return true;
        }
    } else if (checkType === "userMail") {
        if (text) {
            return true;
        }
    } else if (checkType === "userPhone") {
        if (text) {
            return true;
        }
    }
    return false;
}
function checkLogin(token, id) {
    if (token && GetMD5Password(id) == token) {
        return true;
    } else {
        return false;
    }
}
module.exports = router;