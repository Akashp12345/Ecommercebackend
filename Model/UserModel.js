const mongoose=require('mongoose')
const TempSchema=new mongoose.Schema({
      Email:{
            type:String
      },
      OTP:{
            type:String
      }
})

const TempModel=mongoose.model('Temp',TempSchema)
module.exports=TempModel