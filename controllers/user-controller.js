const model=require('../models')
const passport=require('passport')
const passportConfig=require('../passport')
const JWT=require('jsonwebtoken')
const express=require('express')
const userController=express.Router()

const signToken=userID=>{
    return JWT.sign({
        iss: "Developer",
        sub: userID
    },"DeveloperKEY", {expiresIn: "1h"})
}
//register
userController.post('/signup',(req, res)=>{
    const {username, password, role}=req.body;
    model.User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({
                message: {
                    msgBody:"Error",
                    msgError: true
                }})
        if(user)
                res.status(400).json({message:{
                    msgBody:"Username is already taken",
                    msgError: true
                }})
        else{
            const newUser=new model.User({username,password,role})
            newUser.save(err=>{
                if(err)
                    res.status(500).json({
                        message: {
                            msgBody:"Error",
                            msgError: true
                        }})
                else
                    res.status(201).json({
                        message: {
                            msgBody: "Contul a fost creat cu succes",
                            msgError: false
                        }
                    })
            })
        }
    })

})
//login
userController.post('/login',passport.authenticate('local', {session: false}),(req, res)=>{
    
    if(req.isAuthenticated()){
        const {_id, username, role}=req.user
        const token=signToken(_id)
        res.cookie('access_token', token, {httpOnly: true, sameSite: true})
        res.status(200).json({isAuthenticated:true, user:{username, role}})
    }
})
//logout
userController.get('/logout',passport.authenticate('jwt', {session: false}),(req, res)=>{
    res.clearCookie('access_token')
    res.json({user:{username: "", role: ""}, success: true})
})
//post a post
userController.post('/post',passport.authenticate('jwt', {session: false}),(req, res)=>{
    const post = new model.Post(req.body)
    post.save(err=>{
        if(err)
            res.status(500).json({message: {
                msgBody: "Error",
                msgError: true
            }})
        else{
            req.user.posts.push(post)
            req.user.save(err=>{
                if(err)
                res.status(500).json({message: {
                    msgBody: "Error",
                    msgError: true
                }})
                else
                    res.status(200).json({
                        message:{
                            msgBody: "Postat!",
                            msgError: false
                        }
                    })
            })
        }
    })
})
//get user's posts
userController.get('/posts',passport.authenticate('jwt', {session: false}),(req, res)=>{
    model.User.findById({_id: req.user._id})
        .populate('posts').exec((err, document)=>{
            if(err)
            res.status(500).json({message:{
                msgBody: "Unable to get posts",
                msgError: true
            }})
        else
            res.status(200).json({posts:document.posts, authenticated: true});
        })
})
userController.get('/admin',passport.authenticate('jwt', {session: false}),(req, res)=>{
    if(req.user.role==='admin'){
        res.status(200).json({message:{
            msgError:false
        }})
    }
    else
        res.status(403).json({message:{
            msgBody: "You are not an admin",
            msgError:true
        }})
})
//prevent logout
userController.get('/authenticated',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {username, role}=req.user;
    res.status(200).json({isAuthenticated:true, user : {username, role}})
})

//delete user
userController.delete('/delete/:id', (req, res)=>{
    model.User.findByIdAndDelete(req.params.id, err=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to delete the user",
                msgError: true
            }})
        else
            res.status(200).json({message:{
                msgBody: "Successfully deleted the user",
                msgError: false
            }})
    })
    
})

module.exports=userController