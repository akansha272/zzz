const express = require('express');
const app = express();
const router = express.Router(); //creating the router instance by use of express

//Router level middleware applies to all routes within this router
// router.use((req,res,next)=>{
//     console.log('router 1');
//     next();
// });

//this is router level middleware for specific routes
router.use('/profile',(req,res,next)=>{
    console.log('this is demo route');
    next();
});

// router.post('/submit',(req,res,next)=>{
//     console.log('Post request to /submit');
//     next();
// });

// router.post('/submit',(req,res)=>{
//     res.send('Form submitted');
// });

router.get('/profile',(req,res)=>{
    res.send('user profile');
});

router.get('/settings',(req,res)=>{
    res.send('user settings');
});

router.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(404).send('Content not found!');
});

//apply the router to the app for request starting with /user
app.use('/user',router);

app.listen(3000,()=>{
    console.log('Server is running');
});