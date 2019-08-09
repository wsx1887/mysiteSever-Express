var router = require('express').Router();
var cookie = require('cookie-parser');
var userModel = require('../../../models/vueapp/userModel.js');
const jwt = require('jsonwebtoken');

let jwtkey = 'vueapp7iYYUY76';

router.post('/join', function (req, res, next) {
    var joinDate = req.body;
    if (joinDate.name.trim().length < 3 || joinDate.name.trim().length > 15) {
        res.status(200).send({ message: '用户名数量不正确', messageType: 2 });
    }
    else if (joinDate.passWord1.trim().length < 6 || joinDate.passWord1.trim().length > 20) {
        res.status(200).send({ message: '密码数量不正确', messageType: 2 });
    }
    else if (joinDate.passWord1.trim() !== joinDate.passWord2.trim()) {
        res.status(200).send({ message: '两个密码不相等', messageType: 2 });
    }
    else if (joinDate.mail.trim().match(/\S+@\S+.\S+/) == null) {
        res.status(200).send({ message: '邮箱格式不正确', messageType: 2 });
    }
    else if (joinDate.question.trim().length < 1) {
        res.status(200).send({ message: '请填写密保问题', messageType: 2 });
    }
    else if (joinDate.answer.trim().length < 1) {
        res.status(200).send({ message: '请填写密保答案', messageType: 2 });
    }
    else {
        userModel.find({ name: joinDate.name }, function (err, tank) {
            if (err) {
                console.log(err);
                res.status(200).send({ message: '数据库错误，请稍后重试', messageType: 3 });
            } else if (tank.length !== 0) {
                res.status(200).send({ message: '用户名已存在', messageType: 2 });
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
                        res.status(200).send({ message: '数据库错误，请稍后重试', messageType: 3 });
                    } else {
                        res.status(200).send({ message: '注册成功', messageType: 1 });
                    }
                })
            }
        })
    }

})
router.post('/login', (req, res, next) => {
    let name = req.body.name;
    let passWord = req.body.passWord;
    userModel.findOne({ name }, 'name passWord', (err, user) => {
        if (err) {
            console.log(err);
            res.send({ message: '数据库错误，请稍后重试', messageType: 3 });
        } else if (user == null) {
            res.status(200).send({ message: '用户名不存在', messageType: 2 });
        } else if (user.passWord !== passWord) {
            res.send({ message: '密码错误', messageType: 2 });
        } else {
            let token = jwt.sign({ name }, jwtkey, {
                expiresIn: 1 * 60 * 60 //一小时过期
            });
            user.token = token;
            user.save((err, doc) => {
                if (err) {
                    console.log(err);
                    res.send({ message: '数据库错误，请稍后重试', messageType: 3 });
                }
                else {
                    res.send({ message: '登录成功', doc, messageType: 1 });
                }
            });
        }
    })
})
router.post('/checkout',(req,res,next)=>{
    
})

module.exports = router;

function checkUser(token) {
    return new Promise((resolve, reject) => {
        userModel.findOne({ token }, 'token', (err, doc) => {
            if (err || doc == null) {
                resolve(false);
            } else {
                let c;
                try {
                    c = jwt.verify(token, jwtkey);
                    resolve(c);
                } catch (error) {
                    resolve(false);
                }
            }
        })
    })
}