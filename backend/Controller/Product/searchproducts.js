const Product = require("../../schemas/ProductSchema");


const getitemsname=async(req,res)=>{
    const name=req.params.Name;

    const product=await Product.find({Name:name})

    res.json(product)
}
module.exports=getitemsname