const Product = require("../../schemas/ProductSchema");


const findupdate=async(req,res)=>{
    const{Description,Price,Availability}=req.body
    const _id=req.params.id;
    const getproduct=await Product.findByIdAndUpdate(_id,{Description,Price,Availability})
    res.json(getproduct)
}
module.exports=findupdate