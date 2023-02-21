const mongoose = require('mongoose');



const wineschema=mongoose.Schema({
name:String,
img:Array,
price:Number,
pack:Number,
milliliter:Number,
des:Array,
include:Array
})

const WineModel=mongoose.model("Wine",wineschema)


module.exports={WineModel}