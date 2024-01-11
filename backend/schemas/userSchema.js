const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String,unique:true},
    Password:{type:String},
    MobNumber:{type:String},
    Address:{type:String},
    role: { type: String, enum: ['Admin', 'Store', 'Consumer'], required: true }
})
const User=mongoose.model('user',userschema)
module.exports=User