const bcrypt=require('bcrypt');
const Store = require('../../schemas/StoreSchema');
const addStore=async(req,res)=>{
    try {
        const {Name, Location, Password, Mobile,role}=req.body
        const getstore=await Store.findOne({Name})
        if(getstore)
        {
            console.log("Store Exits");
           return res.json({ message: "Store already exists." }); 
          
        }
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(Password,salt)
        const storedetails=await Store.create({
            Name, Location, Password:hashedpassword, Mobile,role
        })
        res.json({storedetails})
    } catch (error) {
        console.error("Error fetching store list:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  
}
module.exports=addStore