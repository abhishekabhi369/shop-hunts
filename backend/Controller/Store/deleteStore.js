

const Product = require("../../schemas/ProductSchema");
const Store = require("../../schemas/StoreSchema");

const deleteStore=async(req,res)=>{
  try {
    const storeId=req.params.id;
    const getStore=await Store.deleteOne({_id:storeId})
   await Product.deleteMany({Store: storeId})
   res.json({ message: "Store and products deleted successfully" });
  } catch (error) {
      res.json({ error: " Error" });
  }
   
}
module.exports=deleteStore