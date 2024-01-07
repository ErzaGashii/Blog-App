// import express from "express";

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use("/api", (req,res,next) =>{
    res.send("Hello here!!!");
});

mongoose.connect('mongodb+srv://erzzag15:eg1120@cluster0.cwaskue.mongodb.net/').then(()=>
    app.listen(5000)).then(()=>console.log("Connected to Database and listing to localhost 5000"))
    .catch((err)=> console.log(err));
