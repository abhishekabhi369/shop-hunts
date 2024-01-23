const Product = require("../../schemas/ProductSchema");


const getitemsname=async(req,res)=>{
   try {
    const name=req.params.Name;

    // const product=await Product.find({Name:name})
    const product=await Product.find({
        "$or":[
            {Name:{$regex:name, $options: 'i'}}
        ]
    }).populate('Store')
    res.json(product)
   } catch (error) {
      res.status(500).json({ error: "Error" });
   }

}
module.exports=getitemsname