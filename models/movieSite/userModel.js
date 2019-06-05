var mongoose=require("../../common/movieServerConnection");

var userSchema=new mongoose.Schema({
    userName:String,
    passWord:String,
    userMail:String,
    userPhone:String,
    userAdmin:Boolean,
    userPower:Number,
    userStop:Boolean
});
/* userSchema.static.findAll=function(callBack){
    this.find({},callBack);
}
userSchema.static.findByUserNmae=function(name,callBack){
    this.find({userName:name},callBack);
} */
var userModel=mongoose.model('user',userSchema);

module.exports=userModel;