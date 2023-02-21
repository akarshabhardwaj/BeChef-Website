const express = require('express');
const{MealModel}=require("../models/Meal.model")

const MealRoute=express.Router()

MealRoute.get("/",async (req,res)=>{
    const query=req.query
try {
    const meals=await MealModel.find(query)
    res.send({"msg":meals})
} catch (error) {
    res.send({"msg":error.message})
}
})




module.exports={MealRoute}