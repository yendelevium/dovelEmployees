const Employee = require("../models/employee")
const ExpressError = require("../utils/expressError")

module.exports.getEmployees=async (req,res)=>{
    const employees = await Employee.find({})
    res.send(employees)
}

module.exports.createEmployee=async (req,res)=>{
    const employee = new Employee(req.body)
    await employee.save()
    res.send("CREATED")
    
}

module.exports.showEmployee= async (req,res)=>{
    const {empId} = req.params
    // console.log(req.params)
    const employee = await Employee.findOne({empId: empId})
    if(!employee){
        throw new ExpressError("Employee not found",400)
    }
    res.send(employee)
}

module.exports.editEmployee=async (req,res)=>{
    const {empId} = req.params
    const employee = await Employee.findOneAndUpdate({empId},req.body)
    if(!employee){
        console.log("Employee doesn't exist")
        throw new ExpressError("Employee doesn't exist",400)
    }
    // It will send the prev version only
    res.send(employee)
}

module.exports.deleteEmployee=async (req,res)=>{
    const {empId} = req.params
    const employee = await Employee.findOneAndDelete({empId})
    if(!employee){
        console.log("Employee doesn't exist")
        throw new ExpressError("Employee doesn't exist",400)
    }
    res.send("DELETED!")
}