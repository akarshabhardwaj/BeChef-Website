const express = require('express');
const{PantryModel}=require("../models/Pantry.model")
const{KitchenModel}=require("../models/Kitchen.model")
const{WineModel}=require("../models/Wine.model")
const{MealModel}=require("../models/Meal.model")


const AdminRoute=express.Router()


AdminRoute.post("/pantry",async (req,res)=>{
    const payload=req.body
try {
    const pantry=new PantryModel(req.body)
    pantry.save()
    res.send({"msg":"Added Pantry Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})

AdminRoute.post("/kitchen",async (req,res)=>{
    const payload=req.body
try {
    const kitchen=new KitchenModel(req.body)
    kitchen.save()
    res.send({"msg":"Added Kitchen Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.post("/wine",async (req,res)=>{
    const payload=req.body
try {
    const wine=new WineModel(req.body)
    wine.save()
    res.send({"msg":"Added Wines Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.post("/meal",async (req,res)=>{
    const payload=req.body
try {
    const meal=new MealModel(req.body)
    meal.save()
    res.send({"msg":"Added Meals Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


module.exports={AdminRoute}