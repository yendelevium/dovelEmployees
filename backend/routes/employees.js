const express=require('express');
const router=express.Router()

const employeeControllers = require("../controllers/employees")
const catchAsync = require("../utils/catchAsync")

router.route("/")
    .get(catchAsync(employeeControllers.getEmployees))
    .post(catchAsync(employeeControllers.createEmployee))

router.route("/:empId")
    .get(catchAsync(employeeControllers.showEmployee))
    .put(catchAsync(employeeControllers.editEmployee))
    .delete(catchAsync(employeeControllers.deleteEmployee))

module.exports=router