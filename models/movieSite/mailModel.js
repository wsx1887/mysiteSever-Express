var mongoose=require("../../common/movieServerConnection");

var mailSchema=new mongoose.Schema({
    fromUser:String,
    toUser:String,
    title:String,
    context:String
});
var mailModel=mongoose.model('movie',mailSchema);

module.exports=mailModel;