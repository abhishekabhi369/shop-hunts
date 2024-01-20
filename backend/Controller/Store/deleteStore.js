

const Product = require("../../schemas/ProductSchema");
const Store = require("../../schemas/StoreSchema");

const deleteStore=async(req,res)=>{
  try {
    const storeId=req.params.id;
    const getStore=await Store.deleteOne({_id:storeId})
   await Product.deleteMany({Store: storeId})
   res.json({ message: "Store and associated products deleted successfully" });
  } catch (error) {
    console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
   
}
module.exports=deleteStore