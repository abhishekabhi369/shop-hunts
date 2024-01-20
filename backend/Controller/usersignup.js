const bcrypt=require('bcrypt')
const User = require('../schemas/userSchema')

const usersignup=async(req,res)=>{
    try {
        const {    Name, Email, Password, MobNumber,Address,role}=req.body
        const getuser=await User.findOne({Email})
        if(getuser)
        {
            console.log("User Exists");
           return res.json({ message: "User already exists." }); 
          
        }
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(Password,salt)
        const userdetails=await User.create({
            Name, Email, Password:hashedpassword, MobNumber,Address,role
        })
        res.json({userdetails})
    } catch (error) {
        console.error("Error fetching store list:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
   
}
module.exports=usersignup