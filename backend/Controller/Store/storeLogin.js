const Store = require("../../schemas/StoreSchema");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const generateToken=(Name,role,id)=>{
    return jwt.sign({Name,role,id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
} 
const checkstore=async(req,res)=>{
    try {
        const {Name,Password}=req.body
        const store=await Store.findOne({Name})
        if(store)
        {
            const pass=await bcrypt.compare(Password, store.Password);
            if(pass)
            {
                token=generateToken(Name,store.role,store._id)
                res.json({ success: true,token ,role: store.role,Name:store.Name,id:store._id});
            }
            else{
                res.json({message:"Password Error"}); 
            }
        }
        else{
            res.json({message:"No Store Found"});
           } 
            
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
   
}
module.exports=checkstore