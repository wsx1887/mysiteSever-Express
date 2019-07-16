var router = require('express').Router();
var userModel = require('../../../models/vueapp/userModel.js');


router.post('/join', function (req, res, next) {
    var joinDate = req.body;
    if (joinDate.name.trim().length < 3 || joinDate.name.trim().length > 15) {
        res.status(403).send('用户名数量不正确');
    }
    else if (joinDate.passWord1.trim().length < 6 || joinDate.passWord1.trim().length > 20) {
        res.status(403).send('密码数量不正确');
    }
    else if (joinDate.passWord1.trim() !== joinDate.passWord2.trim()) {
        res.status(403).send('两个密码不相等');
    }
    else if (joinDate.mail.trim().match(/\S+@\S+.\S+/) == null) {
        res.status(403).send('邮箱格式不正确');
    }
    else if (joinDate.question.trim().length < 1) {
        res.status(403).send('请填写密保问题');
    }
    else if (joinDate.answer.trim().length < 1) {
        res.status(403).send('请填写密保答案');
    }
    else {
        userModel.find({ name: joinDate.name }, function (err, tank) {
            if (err) {
                console.log(err);
                res.status(403).send('数据库错误，请稍候重试');
            } else if (tank.length != 0) {
                res.status(403).send('用户名已存在');
            } else {
                //registerUser
                var registerUser = new userModel({
                    name: joinDate.name,
                    passWord: StjoinDate.passWord1,
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
                        res.status(403).send('数据库错误，请稍候重试');
                    }else{
                        res.status(200).send('注册成功');
                    }
                })
            }
        })
    }

})

module.exports = router;