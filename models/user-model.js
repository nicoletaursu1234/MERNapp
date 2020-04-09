const mongoose=require('mongoose')
const bcrypt=require('bcrypt');

const {Schema}=mongoose;

const userSchema=new Schema({
    username: {
        type:String,
        required:true,
        minlength: [5, 'Username must be 5 characters or more']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more']
    },
    role: {type: String, enum: ['user', 'admin'], required: true},
    createdAt: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default: false},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});
userSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password=passwordHash;
        next();
    })
})

userSchema.methods.comparePassword=function(password, callback){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if(err)
            return callback(err);
        else{
            if(!isMatch)
                return callback(null, isMatch)
            return callback(null, this)
        }
    })
}
const User=mongoose.model("User", userSchema)
module.exports=User