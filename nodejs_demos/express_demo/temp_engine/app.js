const express = require('express');
const app = express();

app.set('view engine','pug')

app.get('/', (req,res)=>{
    // res.send('Hello World');
    res.render('index')
});
app.listen(3000,()=>{
    console.log('Server Started');
});