const bcrypt=require('bcrypt')
const Product = require('../../schemas/ProductSchema')

const addProducts=async(req,res)=>{
    const {Name,Description,Price,Avilability,Store}=req.body
    const productdetails=await Product.create({
        Name, Description, Price, Avilability,Store
    })
    res.json({productdetails})
}
module.exports=addProducts