const passport =require('passport')
const jwtStrategy=require('passport-jwt').Strategy
const localStrategy=require('passport-local').Strategy
const User=require('./models/user-model')

const cookieExtractor = req=>{
    let token=null;
    if(req && req.cookies){
        token=req.cookies["access_token"];
    }
    return token;
}
//auth
passport.use(new jwtStrategy(
    {
    jwtFromRequest: cookieExtractor,
    secretOrKey: "DeveloperKEY"
    },(payload, done)=>
    {
        User.findById({_id:payload.sub}, (err, user)=>{
            if(err)
                return done(err, false);
            if(user)
                return done(null, user);
            else 
                return done(null, false)
        })
    }
    ))
passport.use(new localStrategy((username, password, done)=>{
    User.findOne({username},(err,user)=>{
        //something went wrong with the db
        if(err)
            return done(err);
        //if user doesnt exist
        if(!user)
            return done(null, false);
        user.comparePassword(password,done)
    })
}))