const express = require('express');
var PORT = process.env.PORT||3000;
const path = require('path');
const nodemailer = require("nodemailer");
var app = express();
require('./config');

// Local Imports 
const mongooseConfig = require('./db/mongooseConfig');
const messageModel = require('./db/messageModel');

// Nodemailer config service and auth

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../','public')));

app.get('/messages',(req,res)=>{
messageModel.find().then(messages=>{
    res.send(messages)
}).catch(err=>{
    res.status(400).send(err);
});

});
app.post('/contact',(req,res)=>{
    var body =req.body;
    var newContact = new messageModel({
        name:body.name,
        message:body.message,
        receivedAt:Date.now(),
        email:body.email,
        phone:body.phone
    });

    newContact.save().then((result) => {
        // Send Email to my email address using the result object from the database 
        var messageString = `<ul style="list-style:none;">
                            <li>Name:${result.name}</li>
                             <li>Email:${result.email}</li>
                             <li>Phone:${result.phone} </li>
                             <li>Message:${result.message}<li></ul>`

        var messageOptions ={
            from:process.env.AUTH_EMAIL,
            to:process.env.TO_EMAIL,
            subject:"Portfolio website messsge",
            html:messageString
        };
        
        transporter.sendMail(messageOptions,(err,Response)=>{
            if (err){
                console.log(process.env.AUTH_EMAIL);
                console.log(err);
                return res.sendStatus(400);
            }else if(Response){
                return res.sendStatus(200);

            }
        });
        // res.sendStatus(200)
    }).catch((err) => {
        res.status(400).send(err)
    });
    
});

app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`);
});





