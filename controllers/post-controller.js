const model=require('../models')
const express=require('express')
const postController=express.Router()

postController.post=(req, res)=>{
    const{
        title,
        text,
        userId
    }=req.body;

    const post= new model.Post({
        title,
        text,
        _creator: userId
    })
    
    post.save(err=>{
        if(err)
            res.status(500).json({
                message: {
                    msgBody:"Error",
                    msgError: true
                }})
        else
            res.status(201).json({
                message: {
                    msgBody: "Postarea a fost creata cu succes",
                    msgError: false
                }
            })
    })
}

postController.get=(req, res)=>{
    model.Post.find({})
    .populate({
        path: '_creator',
        select: "username createdAt -_id"
    })
    .populate({
        path: "_comments",
        select: "text createdAt creator",
        match: {'isDeleted': false}
    })
    .then((posts)=>{
        return res.status(200).json({
            succes: true,
            data:posts
        });
    })
    .catch((err)=>{
        return res.status(500).json({
            message:err
        });
    })
}

postController.delete=(req, res)=>{
    const clickedItemId=req.body.deleteButton
    model.Post.findByIdAndDelete(clickedItemId, err=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to delete the post",
                msgError: true
            }})
        else
            res.status(200).json({message:{
                msgBody: "Successfully deleted the post",
                msgError: false
            }})
    })
    
}

module.exports=postController