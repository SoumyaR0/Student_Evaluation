const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
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
    user:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
});

const teacher = mongoose.model('teacher',teacherSchema);
module.exports = teacher;