const express=require("express")
const app=express()

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

require('dotenv').config()

const employeeRoutes=require("./routes/employees")

app.use("/api/employees",employeeRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})