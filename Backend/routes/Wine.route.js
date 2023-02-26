const express = require('express');
const{ WineModel}=require("../models/Wine.model")


const WineRoute=express.Router()

WineRoute.get("/",async (req,res)=>{
    const query=req.query
    try {
        const wines=await WineModel.find(query)
        res.send({"msg":wines})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

WineRoute.get("/:id",async (req,res)=>{
    let Id=req.params.id
       try {
           const kitchens=await WineModel.findOne({_id:Id})
           res.send({"msg":kitchens})
       } catch (error) {
           res.send({"msg":error.message})
       }
   })


module.exports={WineRoute}