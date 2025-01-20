import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express=require("express")
const app=express()
const bodyParser = require('body-parser');
import path from "path"

require('dotenv').config()
const employeeRoutes=require("./routes/employees")
const ExpressError = require("./utils/expressError")

// Update to mongoDB Atlas later
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dovelEmployees')
    .then(()=>{
        console.log("Connection Open")
    })
    .catch(err=>{
        console.log("Connection Failed");
        console.log(err);
    })

app.use(express.json())
app.use("/api/employees",employeeRoutes)

// Error Handler
app.use((err,req,res,next)=>{
    console.log("An Error Occured")
    const { statusCode = 500 } = err
    if(!err.message){
        err.message="Oh no, Something went wrong"
    }
    res.status(statusCode).json({success:false,message:err.message})
})

const __dirname = path.resolve()
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    // On visiting any other path APART from the api endpoints, send the react index.html
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

app.listen(process.env.PORT,()=>{
    console.log(`Listening on http://localhost:${process.env.PORT}`)
})