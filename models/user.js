const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
   
},{
    timestamps:true
})

const User=mongoose.model('User',userSchema)
module.exports=User