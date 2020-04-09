const model=require('../models')
const express=require('express')
const commentController=express.Router()

commentController.post=(req, res)=>{
    const{
        userId,
        text,
        postId
    }=req.body;

    const comment= new model.Comment({
        text,
        _creator: userId,
        _post: postId
    })
    
    comment
        .save()
        .then((newComment)=>{
        model.Post.findByIdAndUpdate(
            postId,
            { $push: {'_comments': newComment._id}}
        )
        .then((existingPost)=>{
            return res.status(200).json({
                succes:true,
                data: newComment,
                existingPost,
                message: {
                    msgBody:"Succes",
                    msgError: false
                }
            })
        }).catch((err)=>{
            return res.status(500).json({
                message: {
                    msgBody:"Error",
                    msgError: true
                }
            })
        })
    }).catch((err)=>{
        return res.status(500).json({
            message: {
                msgBody:"Error",
                msgError: true
            }
        })
    })
}

module.exports=commentController