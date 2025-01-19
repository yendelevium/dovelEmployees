// Employee schema
const mongoose = require("mongoose")
const EmployeeSchema = mongoose.Schema({
    empId : {
        type: String,
        required: true,
        unique : true
    },
    name : {
        type: String,
        required: true
    },
    position : {
        type: String,
        required: true
    },
    salary : {
        type: Number,
        required: true,
        min : [0, "Salary can't be -ve"]
    }
})

module.exports = mongoose.model("Employee",EmployeeSchema)