const bcrypt=require('bcrypt');
const Store = require('../../schemas/StoreSchema');
const addStore=async(req,res)=>{
    const {Name, Location, Password, Mobile,Address}=req.body
    const getstore=await Store.findOne({Name})
    if(getstore)
    {
        console.log("Store Exits");
       return res.json({ message: "Store already exists." }); 
      
    }
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const storedetails=await Store.create({
        Name, Location, Password:hashedpassword, Mobile,Address,Address
    })
    res.json({storedetails})
}
module.exports=addStore