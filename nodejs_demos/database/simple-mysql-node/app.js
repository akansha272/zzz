//import required package
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;
//connectivity
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'*',
    database:'capgemini',
    port:3306
});

db.connect((err)=>{
    if(err){console.error('Could not connect to the database', err.message);
        return;
    }console.log('Connected to the database');
});

//create a rute to fetch users from the database
app.get('/users',(req,res)=>{
    db.query('select * from users', (err,results)=>{
        if(err){console.error('error occured while fetching users from the database', err.message);}
        else{
            res.json(results);
        }
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})