const express = require('express');
const app = express();

const userModel = require('./userSchema');
console.log(userModel);

app.get("/", (req,res)=>{
    res.send("hey");
})

app.get("/create", async (req,res)=>{
    let createuser = await userModel.create({
        name:"harsh",
        email:"harsh@gmail.com",
        username:"harsh"
    })

    res.send(createuser);
})

app.get("/update", async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"deepanshi"}, {name:"deepanshi singhal"}, {new:true});

    res.send(updatedUser);
})

app.get("/read", async (req,res)=>{
    let users = await userModel.find();

    res.send(users);
})

app.get("/delete", async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"harsh"});

    res.send(users);
})

app.listen(3000);