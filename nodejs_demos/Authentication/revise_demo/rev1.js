const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'key123';
app.use(express.json());
//authentication 
app.post('/login' , (res,req)=>{
    const user = {id:101 , username:'Abcd'};
    const token = jwt.sign(user, secretKey, {expiresIn: '1h'});
    res.json({token});
});

//this is a function to authenticate the token , if it's valid token only then this function
//serves as a middleware
function authenticateToken (req , res , next){
    // function looks for the JWT in the Authorization header of the incoming HTTP request (req.headers['authorization']).
    const token = req.header('Authorization')?.replace('Bearer','');
          if(token == null) return res.sendStatus(401);
          //The jwt.verify() function is used to decode and verify the JWT using a secret key
    jwt.verify(token , secretKey , (err,user)=>{
        if(err)  return res.sendStatus(403);
        //extracted user object from tthe token payload and assigned to req.user so it can be use lated in the request processing pipeline like route handler  
        req.user = user;
        next();
    });
}

//this route authorizes the user if the token used is valid 
app.get('/private' , authenticateToken , (req , res)=>{
    try{
        res.send(`Hello ${req.user.username} are an authenticate User , and can access protected routes `);
    }catch(error){
       res.status(401).send('Invalid user ');
    }
});

//start server 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});