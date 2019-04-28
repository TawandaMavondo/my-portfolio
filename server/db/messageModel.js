const mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    receivedAt:{
        type:Number,
        required:true
    }

});

var messageModel = mongoose.model("Messages",messageSchema);
module.exports = messageModel;