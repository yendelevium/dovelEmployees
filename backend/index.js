const express=require("express")
const app=express()
const bodyParser = require('body-parser');

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

// 404 Handler
app.all("*", (req,res,next)=>{
    console.log("404 Not found")
    next(new ExpressError(message="404 Page not found", statusCode=400))
})

// Error Handler
app.use((err,req,res,next)=>{
    console.log("An Error Occured")
    const { statusCode = 500 } = err
    if(!err.message){
        err.message="Oh no, Something went wrong"
    }
    res.status(statusCode).json({success:false,message:err.message})
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})