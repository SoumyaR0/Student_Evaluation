const express = require('express');
const router = express.Router();
const student = require('./../model/Student');

router.post('/', async(req,res)=>{
    try{
        const data = req.body;
        const newStudent = new student(data);
        const response = await newStudent.save();
        res.status(200).json(response);
        console.log("data saved successfully");
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
});
router.get('/', async(req,res)=>{
    try{
        const response = await student.find();
        console.log('data fetched successfully');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
});
router.get('/:Name', async(req,res)=>{
    try{
        const Name = req.params.Name;
        const response = await student.find({name:Name});
        if(!response){
            return res. status(404).json({error:"person not found"});
        }
        console.log('data fetched successfully');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
});

module.exports = router;