// import express from "express";

const express = require('express');

const app = express();

app.use("/api", (req,res,next) =>{
    res.send("Hello");
});

app.listen(5000);