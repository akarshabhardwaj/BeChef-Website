// Backend/routes/User.route.js

const express=require("express")
const {UserModel}=require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userRouter=express.Router()

// Register

userRouter.post("/register",async(req,res)=>{
    const{email,pass,name}=req.body
    try{
        bcrypt.hash(pass,5,async(err,secure_password)=>{
            if(err){
                console.log(err);
            }else{
                const user=new UserModel({email,pass:secure_password,name})
                await user.save();
                console.log(user)
                res.send("Registered")
            }
        });
    }
    catch(err){
        res.send("error");
        console.log(err);
    }
})

// Login

userRouter.post("/login",async(req,res)=>{
    const{email,pass}=req.body;
    try{
        const user=await UserModel.find({email});
        const hashed_pass=user[0].pass;
        if(user.length>0){
            bcrypt.compare(pass,hashed_pass,(err,result)=>{
                if(result){
                    console.log(user)
                    const token=jwt.sign({userID:user[0]._id},"bechef");
                    //const UserNameToken=jwt.sign({userID:user[0].name},"bechef");
                    // const emailToken=jwt.sign({userID:user[0].email},"bechef");
                    res.send({"msg":"login Success","token":token,"userName":user[0].name});
                }else{
                    res.send("wrong cred");
                }
            });
        }
        else{
            res.send("wrong cred")
        }
    }catch(err){
        res.send("Something went wrong")
        console.log(err)
    }
})

module.exports={
    userRouter
}