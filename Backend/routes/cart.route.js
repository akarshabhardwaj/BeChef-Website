const express = require('express');
const { CartModel } = require('../models/cart.model');


const CartRoute=express.Router()


CartRoute.get("/items",async (req,res)=>{

    try {
        const cart=await CartModel.find()
        res.send({"msg":cart})
    } catch (error) {
       res.send({"msg":error.message}) 
    }
})


CartRoute.post("/addtocart",async (req,res)=>{
    let item=req.body;
    try {
        const newitem=new CartModel(item)
        newitem.save()
        res.send({"msg":"Successfully Added"})
    } catch (error) {
        res.send({"msg":error.message}) 
    }
})


module.exports={CartRoute}