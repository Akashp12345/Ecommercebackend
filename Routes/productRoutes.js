const express=require('express')
const router=express.Router()

const {SignUp,GetProduct,SendOTp}=require('../Middlewares/productMidlle')

router.get("/products",GetProduct)
router.post("/userverification",SendOTp)
router.post("/SignUp",SignUp)


module.exports=router