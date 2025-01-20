import { Container, Input, VStack, Heading, Button, Toast  } from "@chakra-ui/react";
import { Field } from "./ui/field"
import React from "react";
import { useEmployeeStore } from "../store/employee";
import { Toaster, toaster } from "./ui/toaster"
import { useNavigate } from "react-router-dom";

// Based on props it's either an edit form or an add form
export default function EmployeeForm(props){
    const [newEmployee, setNewEmployee]=React.useState({
        name:"",
        empId:"",
        position:"",
        salary:0,
    })
    const {createEmployee} = useEmployeeStore()
    const navigate = useNavigate();
    async function handleAddEmployee(){
        console.log(newEmployee)
        const {success,message} = await createEmployee(newEmployee)
        console.log(success,message)
        if(success){
            window.location.href="/?success=true"
        }else{
            toaster.create({
                description: message,
                type: "error",
            })
        }
    }

    return(
        <>
            <Heading>Add Employee</Heading>
            <VStack py={"1rem"} spaceY={2}>
                <Field label="EmpId">
                    <Input 
                        placeholder="8" 
                        name="empId"
                        onChange={(e)=>setNewEmployee({...newEmployee,empId:e.target.value})}
                        value={newEmployee.empId}
                    />
                </Field>
                <Field label="Name">
                    <Input 
                        placeholder="Richard" 
                        name="name"
                        onChange={(e)=>setNewEmployee({...newEmployee,name:e.target.value})}
                        value={newEmployee.name}
                    />
                </Field>
                <Field label="Position">
                    <Input 
                        placeholder="SDE I" 
                        name="position"
                        onChange={(e)=>setNewEmployee({...newEmployee,position:e.target.value})}
                        value={newEmployee.position}
                    />
                </Field>
                <Field label="Salary">
                    <Input 
                        type="number" 
                        placeholder="75000" 
                        name="salary"
                        min={1} 
                        onChange={(e)=>setNewEmployee({...newEmployee,salary:e.target.value})}
                        value={newEmployee.salary}
                    />
                </Field>
                <Button alignSelf={"start"} onClick={handleAddEmployee}>
                    Add Employee
                </Button>
            </VStack>
            <Toaster />
        </>
    )
}