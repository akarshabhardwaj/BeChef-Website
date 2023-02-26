const mongoose = require('mongoose');


const CartSchema=mongoose.Schema({
    name:String,
    img:Array,
    price:Number,
    username:String,
    qty:Number
})


const CartModel=mongoose.model("Cart",CartSchema)


module.exports={CartModel}