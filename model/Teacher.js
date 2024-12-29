const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name:{
        type : String,
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
    user:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const teacher = mongoose.model('teacher',teacherSchema);
module.exports = teacher;