//Backend/index.js

const express=require("express");
const {connection}=require("./config/db");
const {userRouter}=require("./routes/User.route");
const{AdminRoute}=require("./routes/admin.routes")

const {authenticate}=require("./middleware/authenticate.middleware")
const cors=require("cors")
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
app.use(authenticate);
app.use("/admin",AdminRoute)


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