const mongoose= require('mongoose');
const { unique } = require('next/dist/build/utils');
const { type } = require('os');

const studentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    honours:{
        type: String,
        enum:['phy','chem','math','cse','bio'],
        required: true
    },
    subject:{
        type: String,
        required: true
    }
}
);

const student = mongoose.model('student',studentSchema);
module.exports= student;