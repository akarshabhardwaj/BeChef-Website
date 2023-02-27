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
    let {name,img,price,username}=req.body;
    try {
        const newitem=new CartModel({name,img,price,username,qty:1})
        newitem.save()
        res.send({"msg":"Successfully Added"})
    } catch (error) {
        res.send({"msg":error.message}) 
    }
})

CartRoute.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    console.log(payload,"HEllo");
    const id=req.params.id;
    // const post=await postModel.find({"_id":id})
    try{
        await CartModel.findByIdAndUpdate({"_id":id},payload)
        res.send("Successfully patched")
    }catch(err){
        console.log(err)
    }
})

CartRoute.delete("/delete/:id",async(req,res)=>{
    const ID =  req.params.id;
    await CartModel.findByIdAndDelete({"_id":ID});
    res.send({"msg":`note deleted with ${ID}`})
})


CartRoute.delete("/deletecart/:id",async (req,res)=>{
    let Id=req.params.id
    try {
       await CartModel.findByIdAndDelete({_id:Id})
        res.send({"msg":"Successfully deleted"})
    } catch (error) {
        res.send({"msg":error.message}) 
    }
})



CartRoute.delete("/deletecheckout",async (req,res)=>{
    // let Id=req.params.id
    try {
       await CartModel.deleteMany({})
        res.send({"msg":"Successfully deleted"})
    } catch (error) {
        res.send({"msg":error.message}) 
    }
})

module.exports={CartRoute}