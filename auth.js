const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const teacher = require('./model/Teacher');

passport.use(new localStrategy(async(userName,Password,done) => {
    try{
        console.log('Received credentials: ',userName, Password);
        const user = await teacher.findOne({username: userName});
        if(!user){
            return done(null,false,{message: 'incorrect username.'});
        }
        const isPassowrdMatch = user.password ===Password ? true : false;
        if(isPassowrdMatch){
            return done(null,user);
        }else{
            return done(null,false,{message: 'incorrect password'});
        }
    }catch(err){
        return done(err);
    }
}));
module.exports = passport;