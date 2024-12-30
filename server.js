const express=require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const PORT = 3000;

const studentRoute = require('./routes/student');
app.use('/student',studentRoute);

app.get('/',(req,res)=>{
    res.status(200).json("Can I help You sir/mam.");
});
app.get('/student',(req,res)=>{
    res.status(200).json("You are a student.");
});

app.listen(PORT,()=>{
    console.log('app is listening to port:', PORT);
});
