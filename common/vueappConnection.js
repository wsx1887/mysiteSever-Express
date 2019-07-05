var mongoose=require('mongoose');
const connectString='mongodb://vueapp:vueapp888@localhost:27017/vueapp';
mongoose.connect(connectString);

module.exports=mongoose;