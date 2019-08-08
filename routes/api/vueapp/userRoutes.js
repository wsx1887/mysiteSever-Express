var router = require('express').Router();
var cookie=require('cookie-parser');
var userModel = require('../../../models/vueapp/userModel.js');


router.post('/join', function (req, res, next) {
    var joinDate = req.body;
    if (joinDate.name.trim().length < 3 || joinDate.name.trim().length > 15) {
        res.status(200).send({ message: '用户名数量不正确', joinType: 1 });
    }
    else if (joinDate.passWord1.trim().length < 6 || joinDate.passWord1.trim().length > 20) {
        res.status(200).send({ message: '密码数量不正确', joinType: 1 });
    }
    else if (joinDate.passWord1.trim() !== joinDate.passWord2.trim()) {
        res.status(200).send({ message: '两个密码不相等', joinType: 1 });
    }
    else if (joinDate.mail.trim().match(/\S+@\S+.\S+/) == null) {
        res.status(200).send({ message: '邮箱格式不正确', joinType: 1 });
    }
    else if (joinDate.question.trim().length < 1) {
        res.status(200).send({ message: '请填写密保问题', joinType: 1 });
    }
    else if (joinDate.answer.trim().length < 1) {
        res.status(200).send({ message: '请填写密保答案', joinType: 1 });
    }
    else {
        userModel.find({ name: joinDate.name }, function (err, tank) {
            if (err) {
                console.log(err);
                res.status(200).send({ message: '数据库错误，请稍后重试', joinType: 1 });
            } else if (tank.length != 0) {
                res.status(200).send({ message: '用户名已存在', joinType: 1 });
            } else {
                //registerUser
                var registerUser = new userModel({
                    name: joinDate.name,
                    passWord: joinDate.passWord1,
                    mail: joinDate.mail,
                    phone: joinDate.phone,
                    address: joinDate.address,
                    postcode: joinDate.postcode,
                    work: joinDate.work,
                    question: joinDate.question,
                    answer: joinDate.answer
                });
                registerUser.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.status(200).send({ message: '数据库错误，请稍后重试', joinType: 1 });
                    } else {
                        res.status(200).send({ message: '注册成功', joinType: 0 });
                    }
                })
            }
        })
    }

})
router.post('/login',(req,res,next)=>{
    let name=req.body.name;
    let passWord=req.body.passWord;
    userModel.find({name,passWord},(err,resArray)=>{
        if(err){}else if(resArray.length===0){}else{}
    })
})

module.exports = router;