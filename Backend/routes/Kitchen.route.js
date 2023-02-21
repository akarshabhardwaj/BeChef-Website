const express = require('express');
const {KitchenModel}=require("../models/Kitchen.model")


const KitchenRoute=express.Router()

KitchenRoute.get("/",async (req,res)=>{
    const query=req.query
    try {
        const kitchens=await KitchenModel.find(query)
        res.send({"msg":kitchens})
    } catch (error) {
        res.send({"msg":error.message})
    }
})




module.exports={KitchenRoute}