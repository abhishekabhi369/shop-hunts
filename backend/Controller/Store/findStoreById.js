const Store = require("../../schemas/StoreSchema");


const showstore=async(req,res)=>{
    const _id=req.params.id;
    const getstore=await Store.findById(_id).populate('Products');

    // res.json(getuser)
    // const _id=req.params.id;
    // const getuser=await User.findByIdAndUpdate(_id)
    res.json(getstore)
}
module.exports=showstore