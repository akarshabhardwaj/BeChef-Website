const mongoose = require('mongoose');


const mealschema=mongoose.Schema({
name:String,
subDes:String,
img:Array,
price:Number,
des:String,
listHead:String,
listContent:Array,
})

const MealModel=mongoose.model("Meal",mealschema)

module.exports={MealModel}