//Backend/index.js

const express=require("express");
const {connection}=require("./config/db");
const {userRouter}=require("./routes/User.route");
const{AdminRoute}=require("./routes/admin.routes")
const{PantryRoute}=require("./routes/Pantary.route")
const{KitchenRoute}=require("./routes/Kitchen.route")
const{MealRoute}=require("./routes/Meal.route")
const{WineRoute}=require("./routes/Wine.route")

const {authenticate}=require("./middleware/authenticate.middleware")
const cors=require("cors");
const { CartRoute } = require("./routes/cart.route");
require("dotenv").config()

const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("Home page")
})
app.use("/users",userRouter);
app.use("/admin",AdminRoute)
app.use(authenticate);
app.use("/kitchen",KitchenRoute)
app.use("/meals",MealRoute)
app.use("/wines",WineRoute)
app.use("/pantry",PantryRoute)
app.use("/kitchen",KitchenRoute)
app.use("/cart",CartRoute)



// app.use("",);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble catching the DB")
        console.log(err)
    }
    console.log(`running at ${process.env.port}`);
})