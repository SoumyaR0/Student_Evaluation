const express=require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const passport = require('./auth');
app.use(bodyparser.json());
const PORT = 3000;

const logrequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
}
app.use(logrequest);

app.use(passport.initialize());

const localAuth= passport.authenticate('local',{session:false});

const studentRoute = require('./routes/student');
app.use('/student',studentRoute);
const teacherRoute= require('./routes/teacher');
app.use('/teacher',localAuth,teacherRoute);
app.get('/',(req,res)=>{
    res.status(200).json("Can I help You sir/mam.");
});
app.get('/who',(req,res)=>{
    res.status(200).json("You are a student.");
});

app.listen(PORT,()=>{
    console.log('app is listening to port:', PORT);
});
