const jwt=require('jsonwebtoken')
const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startswith("Bearer")){
        try {
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.JWT_JWT_SECRET)
        } catch (error) {
            
        }
    }
}
module.exports=protect