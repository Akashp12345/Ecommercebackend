const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
      id:{
            type:Number
      },
      title:{
            type:String
      },
      price:{
            type:Number
      },
      description:{
            type:String
      },
      category:{
            type:String
      },
      image:{
            type:String
      },
      rating:{
            type:Object
      }
})
const productModel=mongoose.model('Product',productSchema)
module.exports=productModel