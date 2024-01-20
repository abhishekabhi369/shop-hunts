
const Store = require("../../schemas/StoreSchema");

const getdata=async(req,res)=>{
    try {
        const userid=req.params.id;
        const getuser=await Store.findById({_id:userid})
        res.json(getuser)
    } catch (error) {
        console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  
}
module.exports=getdata