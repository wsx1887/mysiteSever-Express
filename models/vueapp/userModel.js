var connection = require('../../common/vueappConnection.js');
var mongoose=require('mongoose');

var userSchema = new mongoose.Schema ({
    name: String,
    passWord: String,
    mail: String,
    phone:String,
    address:String,
    postcode:Number,
    work:String,
    question:String,
    answer:String
});

var userModel=connection.model('user',userSchema);

module.exports=userModel;