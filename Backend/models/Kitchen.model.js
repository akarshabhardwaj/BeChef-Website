const mongoose = require('mongoose');

const kitchenSchema=mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    desc:String,
    img:Array
})


const KitchenModel=mongoose.model("Kitchen",kitchenSchema)


module.exports={
    KitchenModel
}