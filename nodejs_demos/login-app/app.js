const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();
const port = 3000;

//Middleware to parse from data
app.use(bodyParser.urlencoded({extended:true}));

//Set the views directory and set Pug as the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Sample users for login verification
const users= [
    { username: 'admin', password:'admin123'},
    { username: 'user', password:'user123'},
]

// Route to serve the login page (GET request)
app.get('/login', (req, res) => {
    res.render('login', { error: null }); // Render the login page with no error
});
//Route to handle login form submission
app.post('/login', (req,res)=> {
    const {username, password} = req.body;

    //Check if the entered username and password match any user
    const user = users.find(u=> u.username === username && u.password ===password);

    if(user){
        res.render('success', {username:user.username});
    }
    else{
        res.render('login', {error: 'Invalid username or password'});
    }
})

//Start the server
app.listen(port,()=>{
    console.log(`Server running ar https://localhost:${port}`);
});