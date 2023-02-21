const express = require('express');
const {PantryModel}=require("../models/Pantry.model")

const PantryRoute=express.Router()

PantryRoute.get("/",async (req,res)=>{
const query=req.query
try {
    const pantrys=await PantryModel.find(query)
    res.send({"msg":pantrys})
} catch (error) {
    res.send({"msg":error.message})
}
})




module.exports={PantryRoute}