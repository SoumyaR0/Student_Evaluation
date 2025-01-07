const express=require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const teacher = require('./model/Teacher');
app.use(bodyparser.json());
const PORT = 3000;

const logrequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
}
app.use(logrequest);

passport.use(new localStrategy(async(userName,Password,done) => {
    try{
        console.log('Received credentials: ',userName, Password);
        const user = await teacher.findOne({username: userName});
        if(!user){
            return done(null,false,{message: 'incorrect username.'});
        }
        const isPassowrdMatch = user.password ===password ? true : false;
        if(isPassowrdMatch){
            return done(null,user);
        }else{
            return done(null,false,{message: 'incorrect password'});
        }
    }catch(err){
        return done(err);
    }
}));
app.use(passport.initialize());

const studentRoute = require('./routes/student');
app.use('/student',studentRoute);

app.get('/',(req,res)=>{
    res.status(200).json("Can I help You sir/mam.");
});
app.get('/who',(req,res)=>{
    res.status(200).json("You are a student.");
});

app.listen(PORT,()=>{
    console.log('app is listening to port:', PORT);
});
