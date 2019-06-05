var mongoose=require("../../common/movieServerConnection");

var commentSchema=new mongoose.Schema({
    movie_id:Number,
    userName:String,
    title:String,
    context:String,
    check:Boolean //是否已审核
});
var commentModel=mongoose.model('comment',commentSchema);

module.exports=commentModel;