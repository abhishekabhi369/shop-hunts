const bcrypt=require('bcrypt')
const Product = require('../../schemas/ProductSchema')
const Stores = require('../../schemas/StoreSchema');

const addProducts=async(req,res)=>{
    try {
        const {Name,Description,Price,Availability,Store}=req.body
    const productdetails=await Product.create({
        Name, Description, Price, Availability,Store
    })
    await Stores.findByIdAndUpdate(
        Store,
        { $push: { Products: productdetails._id } },
        { new: true }
     );
    res.json({productdetails})
    } catch (error) {
        console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
    
}
module.exports=addProducts