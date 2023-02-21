const express = require('express');
const{WineRoute, WineModel}=require("../models/Wine.model")


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




module.exports={WineRoute}