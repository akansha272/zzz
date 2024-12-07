const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//initializing environment variables
dotenv.config();

//express setup
const app = express();
const port = process.env.PORT||3000;
app.use(bodyParser.json());
app.use(express.static('public'));

//secret key for jwt
const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key'

//Dummy users
const users = [
    {id:1, username:'admin', password:''},
    {id:2, username:'user1', password:''},
];

const Employee =[
    {id:1, name:'John', password:''},
    {id:2, name:'Jane', password:''},
];

//middleware to authenticate jwt token
const authenticate = (req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer','')
    if(!token) return res.static(401).send('Access denied');
    jwt.verify(token,secretKey,(err,user)=>{
        if(err) return res.status(401).send('Invalid token');
        req.user = user;
        next();
    });
};
//middleware to check if user is an admin
const isAdmin = (req,res,next) =>{
    user
}
app.post('/login', (req,res)=>{

});

app.get('userdata', authenticate, (req,res)=>{

});