const express = require('express');
const{PantryModel}=require("../models/Pantry.model")
const{KitchenModel}=require("../models/Kitchen.model")
const{WineModel}=require("../models/Wine.model")
const{MealModel}=require("../models/Meal.model")


const AdminRoute=express.Router()



AdminRoute.post("/login",(req,res)=>{
    const{email,pass}=req.body
    if(email==="admin@gmail.com" && pass==="chefadmin")
    {
        res.send({"msg":"Welcome Admin","token":"cheftoken"})
    }
    else
    {
        res.send({"msg":"Unauthorised Admin"})
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

//!pantry get and Post over with authorization

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
//!kitcehn work for get and post over

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
        
    }
})

//!get and post for meals complete

module.exports={AdminRoute}