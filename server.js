const express=require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.status(200).json("Can I help You sir/mam.");
});
app.get('/student',(req,res)=>{
    res.status(200).json("You are a student.");
});

app.listen(PORT,()=>{
    console.log('app is listening to port:', PORT);
});
