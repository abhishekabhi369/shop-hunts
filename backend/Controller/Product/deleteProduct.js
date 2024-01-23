const Product = require("../../schemas/ProductSchema");
const Store = require("../../schemas/StoreSchema");

const deleteproduct=async(req,res)=>{
  try {
    const productId=req.params.id;
    const getProduct=await Product.deleteOne({_id:productId})
    await Store.updateOne({Products: productId},{ $pull: { Products: productId } })
   res.json({ message: "Products deleted successfully" });
  } catch (error) {
      res.json({ error: "Error" });
  }
   
}
module.exports=deleteproduct