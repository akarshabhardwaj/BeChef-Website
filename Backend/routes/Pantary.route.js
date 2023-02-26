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

PantryRoute.get("/:id",async (req,res)=>{
    let Id=req.params.id
       try {
           const kitchens=await PantryModel.findOne({_id:Id})
           res.send({"msg":kitchens})
       } catch (error) {
           res.send({"msg":error.message})
       }
   })


module.exports={PantryRoute}