// Backend/routes/User.route.js

const express=require("express")
const {UserModel}=require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userRouter=express.Router()

// Register

userRouter.post("/register",async(req,res)=>{
    const{email,pass,name,admin}=req.body
    try{
        bcrypt.hash(pass,5,async(err,secure_password)=>{
            if(err){
                console.log(err);
            }else{
                const user=new UserModel({email,pass:secure_password,name,admin:false})
                await user.save();
                console.log(user)
                res.send({"msg":"Registed Successfully"})
            }
        });
    }
    catch(err){
        res.send({"msg":err.message});
        console.log(err);
    }
})

// Login

userRouter.post("/login",async(req,res)=>{
    const{email,pass}=req.body;
    try{
        const user=await UserModel.find({email});
        if(user.length>0){
            const hashed_pass=user[0].pass;
            bcrypt.compare(pass,hashed_pass,(err,result)=>{
                if(result){
                    console.log(user)
                    const token=jwt.sign({userID:user[0]._id},"bechef");
                    res.send({"msg":"login Success","token":token,"userName":user[0].name});
                }else{
                    res.send({"msg":"wrong cred"});
                }
            });
        }
        else{
            res.send({"msg":"wrong cred"})
        }
    }catch(err){
        res.send({"msg":err.message})
        console.log(err)
    }
})

module.exports={
    userRouter
}