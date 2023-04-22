const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()
const port=process.env.PORT||8010
const Connection=require("./Database/db")
const router=require('./Routes/productRoutes')

app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use("/",router)
Connection()

app.listen(port,()=>{
      console.log(`Server is running on ${port}`)
})

