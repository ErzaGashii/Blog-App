const express = require("express");
const model = require('../model/User');
const routes = require('../routes/user-routes');
const User = require("../model/User");


exports.getAllUser = async (req,res,next) => {
let users;
try {
    users = await User.find();
} catch (error) {
    console.log(error);
}
if(!user){
return res.status(404).json({message: "User not found!"});
}
return res.status(200).json({users});
};

exports.signup = async(req,res,next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (error) {
       return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User already exist! Login Instead!"});
    }
    const user = new User({
        name,
        email,
        password
    });
    try {
        user.save();
    } catch (error) {
       return console.log(err);
    }
    return res.status(201).json({user});
}