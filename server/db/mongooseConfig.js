const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Messages',{useCreateIndex:true,useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB Database");
}).catch((e)=>{console.log(e)});

module.exports = mongoose;