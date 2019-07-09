var mongoose = require('../../common/vueappConnection.js');

var userSchema = new mongoose.Schema({
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

var userModel=mongoose.model('user',userSchema);

module.exports=userModel;