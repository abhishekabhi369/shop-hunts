const User = require("../schemas/userSchema")


const userList=async(req,res)=>{
  try {
    const user=await User.find()
    const userDetails = user.map(user => ({
        id:user._id,
        Name: user.Name,
        Email: user.Email,
        MobNumber: user.MobNumber,
        Address: user.Address,
        role: user.role
      }));
    res.json({user:userDetails})
  } catch (error) {
    console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
   
}
module.exports=userList