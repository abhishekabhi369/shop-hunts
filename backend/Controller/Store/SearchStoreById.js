
const Store = require("../../schemas/StoreSchema");

const getdata=async(req,res)=>{
    try {
        const userid=req.params.id;
        const getuser=await Store.findById({_id:userid})
        res.json(getuser)
    } catch (error) {
      res.json({ error: "Error" });
    }
  
}
module.exports=getdata