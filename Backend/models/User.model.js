//models/User.model.js

const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:String,
    pass:String,
    name:String
})

const UserModel=mongoose.model("user",userSchema);

module.exports={
    UserModel
}

// {
//     "email":"raymarhossor@gmail.com",
//     "pass":"apbdrk1970",
//     "name":"Rajkumar",
//     "age":25
// }