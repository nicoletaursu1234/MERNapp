const model = require('../models')
const express=require('express')
const productController=express.Router()

productController.post=(req, res) => {
    const { name, description, image, price } = req.body;
    console.log(req.body)

    const newProduct = new model.Product({
        name,
        description,
        price,
        image
    })

    newProduct.save(err=>{
        if(err)
            res.status(500).json({
                message: {
                    msgBody:"Error",
                    msgError: true
                }})
        else{
            
            res.status(201).json({
                message: {
                    msgBody: "Produsul a fost creat cu succes",
                    msgError: false
                }
            })
        }
    })
}

productController.get=(req, res) => {
    model.Product.find({})
        .then((products) => {
            return res.status(200).json({
                succes: true,
                data: products
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: err
            });
        })
}

productController.delete=(req, res)=>{
    const clickedItemId=req.body.deleteButton
    model.Product.findByIdAndDelete(clickedItemId, err=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to delete the product",
                msgError: true
            }})
        else{
            res.status(200).json({message:{
                msgBody: "Successfully deleted the product",
                msgError: false
            }})
        }
})
}


module.exports=productController