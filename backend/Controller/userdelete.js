const User = require("../schemas/userSchema");


const deleteuser=async(req,res)=>{
  try {
    const _id=req.params.id;
    const getuser=await User.deleteOne({_id})
    res.json(getuser)
  } catch (error) {
      res.json({ error: "Error" });
  }
   
}
module.exports=deleteuser