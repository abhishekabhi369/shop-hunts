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
      res.json({ error: " Error" });
  }
   
}
module.exports=userList