var mongoose = require('mongoose');
const connectString = 'mongodb://vueapp:vueapp888@127.0.0.1:27017/vueapp';
var connection = mongoose.createConnection(connectString,{ useNewUrlParser: true });

module.exports = connection;