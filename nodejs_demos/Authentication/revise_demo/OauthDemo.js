const express = require('express');
const passport = require('passport');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const {Strategy: GitHubStrategy}=require ('passport-github');

dotenv.config();

const app = express();
//session managemnt 
app.use(expressSession({
   secret:process.env.SESSION_SECRET, 
   resave: false,
   saveUninitialized: true ,
}));

//passport.js initialize
app.use(passport.initialize());//Initializes Passport.js to handle authentication.
app.use(passport.session());//Tells Passport to manage the user’s session once authenticated, by serializing and deserializing the user data.

//configure passport with github Oauth strategy 
passport.use(new GitHubStrategy({
   clientID: process.env.GITHUB_CLIENT_ID,
   clientSecret: process.env.GITHUB_CLIENT_SECRET,
   callbackURL: 'http://localhost:4000/auth/github/callback',
} , (accessToken , refreshToken , profile,done)=>{
   return done(null,profile);
}));
//serialize and deserialize user 
passport.serializeUser((user, done)=>{
   done(null, user.id);
});
passport.deserializeUser((user,done)=>{
   done(null,user);
});

//Routes 
//start Oauth Authentication 
//When the user visits /auth/github, they are redirected to GitHub's authentication page.
// app.get('/auth/github', (req,res)=>{
//    passport.authenticate('github',{scope:['user']}),(req,res)
// });
app.get('/auth/github', passport.authenticate('github', { scope: ['user'] }));
 

//callback route 
app.get('/auth/github/callback', passport.authenticate('github',{failureRedirect:'/'}),
(req,res)=>{
   res.redirect('/profile');
});
//profile route 
app.get('/profile', (req,res)=>{
   if(!req.isAuthenticated()){
       return res.redirect('/');
   }
   res.json(req.user);
});
//home route 
app.get('/',(req,res)=>{
   if(req.isAuthenticated()){
       res.redirect('/profile');
   }else{
    res.send('<h1>welcome to Auth example</h1><a href="/auth/github">Login with GitHub</a>');
   }
});
//logout route 
app.get('/logout' ,(req,res)=>{
   req.logout(()=>{
       res.redirect('/');
   });
});

const PORT = process.env.PORT|| 4000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

//node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"