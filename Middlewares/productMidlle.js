const productModel = require("../Model/productModel");
const TempModel=require("../Model/UserModel")
const nodemailer=require("nodemailer")
require('dotenv').config()
const mailing=nodemailer.createTransport({
           service:"gmail",
           auth:{
            user:process.env.MAIL_ID,
            pass:process.env.MAIL_PASSWORD
           }
})

const GetProduct = async (req, res) => {
  try {
    let find = await productModel.find({}, { _id: 0 });
    res.status(201).json(find);
  } catch (err) {
    res.status(401).json(err); 
  }
};

const SendOTp = async (req, res) => {
  try {

      let random=Math.floor(Math.random()*1000+8999)
      const mailoptions={
            from:"akash@gmail.com",
            to:req.body.Email,
            subject:"OTP Verification",
            text:`Dear ${req.body.Firstname} ${req.body.Lastname} , Your OTP for registration is ${random}`
      }
      mailing.sendMail(mailoptions,async(err,result)=>{
            if(err){
                  console.log(err)
                  res.status(402).json(err);
            }
            else{
                 
                        let update=await TempModel.updateOne({Email:req.body.Email},{OTP:random})
                        if(update.modifiedCount>0){
                              res.status(201).json("OTP send Successfully");
                        }
                        if(update.matchedCount===0){
                              let newuser=new TempModel({
                                    Email:req.body.Email,
                                    OTP:random
                              })
                              newuser.save()
                              .then(()=>res.status(201).json("OTP send Successfully"))
                              .catch((err)=>res.status(402).json(err))
                        }
            }
      })

  } catch (err) {
    res.status(401).json(err);
  }
};


const SignUp=async(req,res)=>{
try{
      console.log(req.body)
             
}
catch(err){
      res.status(401).json(err);
}
}
module.exports = { GetProduct, SendOTp,SignUp };
