const mongoose= require('mongoose');
const { type } = require('os');

const studentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    honours:{
        type: String,
        enum:['phy','chem','math','cse','bio'],
        required: true
    },
    subject:{
        type: [String],
        required: true
    }
}
);

const student = mongoose.model('student',studentSchema);
module.exports= student;