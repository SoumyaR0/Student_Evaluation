const express = require('express');
const router = express.Router();
const teacher = require('./../model/Teacher');

router.post('/', async(req,res)=>{
    try{
        const data = req.body;
        const newTeacher = new teacher(data);
        const response = await newTeacher.save();
        res.status(200).json(response);
        console.log("data saved successfully");
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
});
router.get('/', async(req,res)=>{
    try{
        const response = await teacher.find();
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
        const response = await teacher.find({name:Name});
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