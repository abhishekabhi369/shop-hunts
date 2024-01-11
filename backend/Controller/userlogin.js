const User = require("../schemas/userSchema")
const bcrypt=require('bcrypt')
const check=async(req,res)=>{
    const {Email,Password}=req.body
    const user=await User.findOne({Email})
    if(user)
    {
        const pass=await bcrypt.compare(Password, user.Password);
        if(pass)
        {
            res.json("Login suceess"); 
        }
        else{
            res.json("Password Error"); 
        }
    }
    else{
        res.json("No User Found");
       } 
           
}
module.exports=check