require('dotenv').config()
const express = require('express')
const mailController = express.Router()
const nodemailer = require("nodemailer")
const PASS=process.env.PASS
mailController.post=(req, res)=>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail=`
        <h3>Details: </h3>
        <ul>
        <li>Nume: ${req.body.fName}</li>
        <li>Prenume: ${req.body.lName}</li>
        <li>Email: ${req.body.email}</li>
        <li><p>Mesajul: ${req.body.text}<p></li>
        `

        let transporter=nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            post:587,
            auth:{
                user: 'gaston88@ethereal.email',
                pass: PASS
            }
        })

        let mailOptions={
            from: 'test@testaccount.com',
            to: 'gaston88@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info)=>{
            if(err)
            res.status(500).json({
                message: {
                    msgBody:"Error",
                    msgError: true
                }})
        else
            res.status(201).json({
                message: {
                    msgBody: "Mesajul a fost transmis cu succes",
                    msgError: false
                }
            })
            
        })
    })
}
module.exports = mailController



