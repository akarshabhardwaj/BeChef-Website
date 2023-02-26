const mongoose = require('mongoose');


const CartSchema=mongoose.Schema({
    name:String,
    img:Array,
    price:String,
    username:String
})


const CartModel=mongoose.model("Cart",CartSchema)


module.exports={CartModel}