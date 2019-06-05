var mongoose=require("../../common/movieServerConnection");

var movieSchema=new mongoose.Schema({
    movie_id:Number,
    movieImgUrl:String
});
var movieModel=mongoose.model('movie',movieSchema);

module.exports=movieModel;