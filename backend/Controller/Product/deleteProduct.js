const Product = require("../../schemas/ProductSchema");
const Store = require("../../schemas/StoreSchema");

const deleteproduct=async(req,res)=>{
  try {
    const productId=req.params.id;
    const getProduct=await Product.deleteOne({_id:productId})
    await Store.updateOne({Products: productId},{ $pull: { Products: productId } })
   res.json({ message: "Products deleted successfully" });
  } catch (error) {
    console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
   
}
module.exports=deleteproduct