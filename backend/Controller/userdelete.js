const User = require("../schemas/userSchema");


const deleteuser=async(req,res)=>{
  try {
    const _id=req.params.id;
    const getuser=await User.deleteOne({_id})
    res.json(getuser)
  } catch (error) {
    console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
   
}
module.exports=deleteuser