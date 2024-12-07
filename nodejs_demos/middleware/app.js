const express = require('express');
const app = express();
const port = 3000;
app.use((req,res,next)=>{
    console.log('this is a middleware function');
    next();
});

app.use((req,res,next)=>{
    console.log('example 2');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something went wrng')
})

app.get('/',(req,res)=>{
    res.send('this is main page');
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});