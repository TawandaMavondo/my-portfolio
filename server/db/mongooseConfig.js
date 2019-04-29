const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{useCreateIndex:true,useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB Database");
}).catch((e)=>{console.log(e)});

module.exports = mongoose;