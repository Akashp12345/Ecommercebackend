const mongoose=require('mongoose')
require('dotenv').config()
const Connection=()=>{
      mongoose.connect(process.env.MONGO_PATH)
      .then(()=>console.log("Connected To database"))
      .catch(err=>console.log(err))
}
module.exports=Connection