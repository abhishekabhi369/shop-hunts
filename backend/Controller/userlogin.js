const User = require("../schemas/userSchema")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const generateToken=(Email,role)=>{
    return jwt.sign({Email,role},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
} 
const check=async(req,res)=>{
    const {Email,Password}=req.body
    const user=await User.findOne({Email})
    if(user)
    {
        const pass=await bcrypt.compare(Password, user.Password);
        if(pass)
        {
            token=generateToken(Email,user.role)
            res.json({ success: true,token ,role: user.role,Name:user.Name});
            
        }
        else{
            res.json({message:"Password Error"}); 
        }
    }
    else{
        res.json({message:"No User Found"});
       } 
        
}
module.exports=check