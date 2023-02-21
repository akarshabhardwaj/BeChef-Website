const mongoose = require('mongoose');

const pantryschema=mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    desc:String,
    img:Array
})

const PantryModel=mongoose.model("Pantry",pantryschema)


module.exports={
    PantryModel
}