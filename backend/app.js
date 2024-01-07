const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');

const app = express();

app.use(express.json());

app.use('/api/user',router);
app.use('/api/user/signup', router);

app.use("/api", (req,res,next) =>{
    res.send("Hello here!!!");
});

mongoose.connect('mongodb+srv://erzzag15:eg1120@cluster0.cwaskue.mongodb.net/').then(()=>
    app.listen(5000)).then(()=>console.log("Connected to Database and listing to localhost 5000"))
    .catch((err)=> console.log(err));
