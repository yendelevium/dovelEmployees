const express=require('express');
const router=express.Router()

const employeeControllers = require("../controllers/employees")

router.route("/")
    .get(employeeControllers.getEmployees)
    .post(employeeControllers.createEmployee)

router.route("/:empId")
    .get(employeeControllers.showEmployee)
    .put(employeeControllers.editEmployee)
    .delete(employeeControllers.deleteEmployee)

module.exports=router