const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { trackSynchronousPlatformIOAccessInDev } = require('next/dist/server/app-render/dynamic-rendering');

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
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

teacherSchema.pre('save',async function(next){
    const teacher = this;

    if (!teacher.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(teacher.password,salt);

        teacher.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
});

teacherSchema.methods.comparePassword = async function(teacherPassword){
    try{

        const isMatch = await bcrypt.compare(teacherPassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

const teacher = mongoose.model('teacher',teacherSchema);
module.exports = teacher;