const Employee = require("../models/employee")
const ExpressError = require("../utils/expressError")

module.exports.getEmployees=async (req,res)=>{
    const employees = await Employee.find({})
    res.status(200).json({success:true,data:employees})
}

module.exports.createEmployee=async (req,res)=>{
    const employee = new Employee(req.body)
    await employee.save()
    res.status(201).json({success:true,data:employee})
    
}

module.exports.showEmployee= async (req,res)=>{
    const {empId} = req.params
    // console.log(req.params)
    const employee = await Employee.findById(empId)
    if(!employee){
        throw new ExpressError("Employee not found",400)
    }
    res.status(201).json({success:true,data:employee})
}

module.exports.editEmployee=async (req,res)=>{
    const {empId} = req.params
    const employee = await Employee.findByIdAndUpdate(empId,req.body)
    if(!employee){
        console.log("Employee doesn't exist")
        throw new ExpressError("Employee doesn't exist",400)
    }
    // It will send the prev version only
    res.status(201).json({success:true,data:employee})
}

module.exports.deleteEmployee=async (req,res)=>{
    const {empId} = req.params
    const employee = await Employee.findByIdAndDelete(empId)
    if(!employee){
        console.log("Employee doesn't exist")
        throw new ExpressError("Employee doesn't exist",400)
    }
    res.status(201).json({success:true,data:employee})
}