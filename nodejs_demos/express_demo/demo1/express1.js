const express = require('express');
const app = express(); //return an instance of an express app, which is stored in the app variable 
const port = 3000;

//set EJS as the template engine
app.set('view engine','ejs');
app.set('views',__dirname, '/views');

//render a dynamic HTML page
app.get("/", (req,res)=>{
    // res.send('Welcome to the Express Website');
    res.render('index',{message:'Welcome to the Express Website! Designed with Template engine'})
});
//start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});