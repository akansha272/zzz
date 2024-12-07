const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//initialize enviorment variables 
dotenv.config();

//express setup
const app = express();
const port = process.env.PORT||3000;
app.use(bodyParser.json());
app.use(express.static('public'));

//secret key for jwt 
const secretKey = process.env.JWT_SECRET_KEY || 'your-secret=key';

//Dummy iusers 
const users = [
   {id:1, username:'admin' , password:'$2a$10$kZkszNbcWqfivXz2NTvLVOdVDhlLQ3WtQRy0zYeZWUjOI/Au.GEqC'} ,
   {id:2, username:'user1' , password:'$2a$10$kZkszNbcWqfivXz2NTvLVOdVDhlLQ3WtQRy0zYeZWUjOI/Au.GEqC'} 
];
let employees =[
    {id:1, name:'John', position:'Developer'},
    {id:2, name:'Jane', position:'Manager'},
];
//middleware to authenticate jwt token 
const authenticate = (req, res , next)=>{
    const token = req.header('Authorization')?.replace('Bearer','');
    if(!token) return res.static(401).send('Access denied');
    jwt.verify(token,secretKey,(errr,user)=>{
        if(errr) return res.status(401).send('Invalid token');
        req.user = user;
        next();
    });

};
//middleware to check if the user is an admin 
const isAdmin = (req,res,next)=>{
  if(req.user.role !== 'admin')return res.status(403).send('Access denied . Admin only');
  next();
};
app.post('/login' , async(req,res) =>  {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username );
    if (!user) return res.status(401).send('Invalid username or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid username or password');
    const token = jwt.sign({id:1 , username:user.username , position:user.position}.secretKey,{expiresIn:'1h'});
    res.json({token});
});
//// Route to display user data (requires JWT authentication)
app.get('/userdata', authenticate,(req,res)=>{
   const  user = req.user;
   res.json({id:user.id , username:user.username , position:user.position});

});
// Route to add a new user (admin only)
app.post('/adduser' , authenticate , isAdmin , async (req,res)=>{
    const {username, password, position} = req.body;
    const existingUser = users.find(u=> u.username === username);
    if(existingUser) return res.status.send('User Already exists');
    const hasedPassword = await bcrypt.hash(password , 10);
    const newUser = {id:user.length +1 , username, password:hasedPassword , position};
    users.push(newUser);
    res.status(201).send('User added !')
});
//Route to remove a user(admin only)
app.delete('/removeuser/:id' ,authenticate , isAdmin , (req, res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if(userIndex === -1) return res.status(404).send('User not found');
    users.splice(userIndex,1);
    res.send('User removed successfully');
} );

// Route to display employee data (requires JWT authentication)
app.get('/employees' , authenticate , (req, res)=>{
    res.json(employees);
});
// Route to add a new employee (admin only)
app.post('/addemployee' , authenticate, isAdmin , (req,res)=>{
    const newemployee = {id:employees.length+1 , name , position};
    employees.push(newemployee);
    res.status(201).send('Employee added !');
})

// Route to remove an employee (admin only)
app.delete('/removeemployee/:id' ,authenticate , isAdmin , (req, res)=>{
    const empId = parseInt(req.params.id);
    const empIndex = employees.findIndex(e=> e.id === empId);
    if(empIndex === -1) return res.status(404).send('Employee not found');
    employees.splice(empIndex,1);
    res.send('Employee removed successfully');
} );




app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})