const express = require('express');
const{PantryModel}=require("../models/Pantry.model")
const{KitchenModel}=require("../models/Kitchen.model")
const{WineModel}=require("../models/Wine.model")
const{MealModel}=require("../models/Meal.model");
const { UserModel } = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")


const AdminRoute=express.Router()



AdminRoute.post("/login",async (req,res)=>{
    // const{email,pass}=req.body
    // console.log(req.body)
    // if(email==="admin@gmail.com" && pass==="chefadmin")
    // {
    //     res.send({"msg":"Welcome Admin","token":"cheftoken"})
    // }
    // else
    // {
    //     res.send({"msg":"Unauthorised Admin"})
    // }
    const{email,pass}=req.body;
    try{
        const user=await UserModel.find({email});
        if(user.length>0){
            console.log(user)
            if(user[0].admin){
                const hashed_pass=user[0].pass;
                bcrypt.compare(pass,hashed_pass,(err,result)=>{
                    if(result){
                        console.log(user)
                        const token=jwt.sign({userID:user[0]._id},"bechef");
                        res.send({"msg":"login Success","token":token,"userName":user[0].name,"admin":user[0].admin});
                    }else{
                        res.send({"msg":"wrong cred"});
                    }
                });
            }
            else 
            {
                res.send({"msg":"wrong cred"});
            }
            
        }
        else{
            res.send({"msg":"wrong cred"})
        }
    }catch(err){
        res.send({"msg":err.message})
        console.log(err)
    }
})

AdminRoute.get("/pantrypro",async (req,res)=>{
    const token=req.headers.authorization
    const query=req.query
    try {
        if(token==="cheftoken"){
            const items=await PantryModel.find(query)
            res.send({"msg":items})
        }
        else
        {
            res.send({"msg":"Wrong Admin Token"})
        }
    } catch (error) {
        
    }
})


AdminRoute.post("/pantry",async (req,res)=>{
    const payload=req.body
    const token=req.headers.authorization
try {
    if(token==="cheftoken"){
        // await PantryModel.insertMany(payload)
        const pantry=new PantryModel(req.body)
        pantry.save()
        res.send({"msg":"Added Pantry Data"})
    }else
    {
        res.send({"msg":"Wrong Admin Token"})
    }
   
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.delete("/pantrydelete/:id",async (req,res)=>{
    const Id=req.params.id;
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await PantryModel.findByIdAndDelete({_id:Id})
            res.send({"msg":`Successfully Deleted Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        
    }
})

AdminRoute.patch("/pantryupdate/:id",async (req,res)=>{
    const Id=req.params.id;
    // console.log(req.body)
    // res.send(Id)
    const payload=req.body
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await PantryModel.findByIdAndUpdate({_id:Id},payload)
            res.send({"msg":`Successfully updated Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        
    }
})

//!pantry get and Post and delete over with authorization

//!kitchen work start

AdminRoute.post("/kitchen",async (req,res)=>{
    const payload=req.body
    const token=req.headers.authorization
try {
    if(token==="cheftoken"){
        const kitchen=new KitchenModel(req.body)
        kitchen.save()
        res.send({"msg":"Added Kitchen Data"})
    }
    else
    {
        res.send({"msg":"Wrong Admin Token"}) 
    }
   
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.get("/kitchenpro",async (req,res)=>{
    const token=req.headers.authorization
    const query=req.query
    try {
        if(token==="cheftoken"){
            const items=await KitchenModel.find(query)
            res.send({"msg":items})
        }
        else
        {
            res.send({"msg":"Wrong Admin Token"})
        }
    } catch (error) {
        
    }
})


AdminRoute.delete("/kitchendelete/:id",async (req,res)=>{
    const Id=req.params.id;
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await KitchenModel.findByIdAndDelete({_id:Id})
            res.send({"msg":`Successfully Deleted Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})


AdminRoute.patch("/kitchenupdate/:id",async (req,res)=>{
    const Id=req.params.id;
    // console.log(req.body)
    // res.send(Id)
    const payload=req.body
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await KitchenModel.findByIdAndUpdate({_id:Id},payload)
            res.send({"msg":`Successfully updated Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        
    }
})
//!kitcehn work for get and post and delete over

//!wine work start

AdminRoute.post("/wine",async (req,res)=>{
    const payload=req.body
    const token=req.headers.authorization
try {
    if(token==="cheftoken"){
        const wine=new WineModel(req.body)
        wine.save()
        res.send({"msg":"Added Wines Data"})
    }
    else
    {
        res.send({"msg":"Wrong Admin Token"}) 
    }
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.get("/winepro",async (req,res)=>{
    const token=req.headers.authorization
    const query=req.query
    try {
        if(token==="cheftoken"){
            const items=await WineModel.find(query)
            res.send({"msg":items})
        }
        else
        {
            res.send({"msg":"Wrong Admin Token"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})


AdminRoute.delete("/winedelete/:id",async (req,res)=>{
    const Id=req.params.id;
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await WineModel.findByIdAndDelete({_id:Id})
            res.send({"msg":`Successfully Deleted Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})

AdminRoute.patch("/wineupdate/:id",async (req,res)=>{
    const Id=req.params.id;
    // console.log(req.body)
    // res.send(Id)
    const payload=req.body
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await WineModel.findByIdAndUpdate({_id:Id},payload)
            res.send({"msg":`Successfully updated Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        
    }
})

//!wine work over get and post

//!meal product starts 

AdminRoute.post("/meal",async (req,res)=>{
    const payload=req.body
    const token=req.headers.authorization
try {
    if(token==="cheftoken"){
        const meal=new MealModel(req.body)
        meal.save()
        res.send({"msg":"Added Meals Data"})
    }
    else
    {
        res.send({"msg":"Wrong Admin Token"}) 
    }
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.get("/mealpro",async (req,res)=>{
    const token=req.headers.authorization
    const query=req.query
    try {
        if(token==="cheftoken"){
            const items=await MealModel.find(query)
            res.send({"msg":items})
        }
        else
        {
            res.send({"msg":"Wrong Admin Token"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})


AdminRoute.delete("/mealdelete/:id",async (req,res)=>{
    const Id=req.params.id;
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await MealModel.findByIdAndDelete({_id:Id})
            res.send({"msg":`Successfully Deleted Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})

AdminRoute.patch("/mealupdate/:id",async (req,res)=>{
    const Id=req.params.id;
    // console.log(req.body)
    // res.send(Id)
    const payload=req.body
    const token=req.headers.authorization
    try {
        if(token==="cheftoken"){
            await MealModel.findByIdAndUpdate({_id:Id},payload)
            res.send({"msg":`Successfully updated Id:${Id}`})
        }
        else
        {
res.send({"msg":"Invalid Token"})
        }
    } catch (error) {
        
    }
})

//!get and post for meals complete

module.exports={AdminRoute}