// const express = require('express');
// const application = express();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const bodyparser = require('body-parser');

// //middleware to parse JSON body
// application.use(bodyparser.json());

// const secretkey = 'your-secret-key'

// const users = [{id:1, username:'admin', password:'$25@10myHashedPassword1234'}]

// //post route to handle login
// application.post('/login',async (req,res)=>{
//     const {username,password}= req.body;
//     const user = users.find(u=>u.username ===username);
//     if(!user){
//         return res.status(401).send({message:'Invalid username or password'});
//     }
// //compare the provided password with the hashed password in tha database
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if(!passwordMatch){
//         return res.status(401).send({message:'Incalid username or password'});
//     }
//     //if authentication is successful generate JWT token
//     const token = jwt.sign({id:user.id, username:user.username}, secretkey, {expiresIn:'1h'});
//     res.json({token});
// });

// //middleware to authenticate the token
// const authenticate = (req,res,next)=>{
//     //get token from Authorization header
//     const token = req.header('Authorization')?.replace('bearer','');
//     //if no token is provided then return 401 
//     if(!token) return res.status(401).send({message:'Access denied.No token'});
//     jwt.verify(token,secretkey,(err,user)=>{
//         if(err) return res.status(403).send('invalid token!');
//         //attach user info to request object
//         req.user = user;
//         next();
//     })

// };

// //get - pretected route, accessible only with a valid JWT token
// application.get('/protected',(req,res)=>{
//     res.send(`Hello ${req.user.username}, you have access to this protected route!`);
// });

// //start server
// const port = process.env.port||3000;
// application.listen(port, ()=>{
//     console.log(`server is running http://localhost:${port}`);
// });

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyparser = require('body-parser');
const app = express();
 
//middleware to parse JSON body
app.use(bodyparser.json());
 
const secretKey = 'key';
 
const users=[{id:1, username:'admin',
    password:'$2a$10$evTWPYy6IC94.Y5iIP6Oj.jtrt7IuNWZuQGTplCOpr3SuZcoZmSeu'},];
 
//post route to handle login
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user = users.find(u=>u.username===username);
    if(!user){
        return res.status(401).send({message:'Invalid username or password'});
    }
    //compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return res.status(401).send({message:'Invalid username or password'});
    }
 
    //if authentication
    const token = jwt.sign({id:user.id, username:user.username},secretKey,{expiresIn:'1h'});
    res.json({token});
});
 
//middleware to authenticate the token
const authenticate = (req,res,next)=>{
    //get token from Authorization header
    const token = req.header('authorization')?.replace('Bearer ', '').trim();
    // const token =req.header('authorization')?.replace('bearer','');
    //if no token is provided then return 401
    if(!token) return res.status(401).send({message:'Access denied. No token'});
 
    //function to verify the jwt
   
    jwt.verify(token,secretKey,(err,user)=>{
        if(err){
            return res.status(403).send('invalid token !');
        }
        //attach user info to request object
        req.user=user;
        next();
    });
 
};
 
//get - protected route, accessible only with a valid JWT token
app.get('/protected',authenticate,(req,res)=>{
    res.send(`Hello ${req.user.username},you have access to this protected route! `);
});
 
 
//start server
const port = process.env.port||3000;
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});
 
 
 