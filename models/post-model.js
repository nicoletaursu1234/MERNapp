const mongoose=require('mongoose')
const {Schema}=mongoose;

const postSchema=new Schema({
    title: {type: String, required:true},
    text: {type: String, required: true},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    _creator: { type: Schema.ObjectId, ref: 'User'},
    _comments: [{type: Schema.ObjectId, ref: 'Comment'}]
});
const Post=mongoose.model("Post", postSchema)
module.exports=Post