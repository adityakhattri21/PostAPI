const express = require('express');
const app = express();
const db = require("./database/conn");
const User = require("./database/models/userModel");
const Mobile = require("./database/models/mobileModel");
// const ChatBot = require("./database/models/chatBotModel");

app.use(express.json());

app.use(express.urlencoded({extended:true}));

  //Test DB
  db.authenticate()
  .then(()=>console.log("Database Connected to the server"))
  .catch(err=>console.log(err));


console.log(db.models)

app.get("/", async (req,res)=>{
    const users = await User.findOne({
        where:{
            name:"Test"
        },
        include:{
            model:db.models.mobiles
        }
    });
    const mobile = await users.getMobile();
    res.status(200).json({
        success:true,
        users,
        mobile
    })
});

app.post("/post", async (req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.create({name:name,email:email,password:password});
    res.status(200).json({
        success:true,
        user
    });
})

app.post("/mobile", async (req,res)=>{
    const {number,userUserId} = req.body;
    const user = await Mobile.create({number:number,userUserId:userUserId});
    res.status(200).json({
        success:true,
        user
    });
})

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
    next();
})

module.exports = app;