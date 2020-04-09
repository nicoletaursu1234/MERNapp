const mongoose=require('mongoose')
const {Schema}=mongoose;

const productSchema=new Schema({
    name: {type: String, required:true},
    description: String,
    price: {type: Number, required:true},
    image: String,
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
});
const Product=mongoose.model("Product", productSchema)
module.exports=Product