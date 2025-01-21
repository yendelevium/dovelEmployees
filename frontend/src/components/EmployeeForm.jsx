import { Input, VStack, Heading, Button, Toast, HStack  } from "@chakra-ui/react";
import { Field } from "./ui/field"
import React from "react";
import { useEmployeeStore } from "../store/employee";
import { Toaster, toaster } from "./ui/toaster"
import { Link, useParams } from "react-router-dom";

// Based on props it's either an edit form or an add form
export default function EmployeeForm(props){
    const [newEmployee, setNewEmployee]=React.useState({
        name:props.name || "",
        position:props.position || "",
        salary:props.salary || 0,
    })
    const {createEmployee, editEmployee} = useEmployeeStore()
    const {empId}=useParams()
    console.log(empId)

    async function handleAddEmployee(){
        const {success,message} = await createEmployee(newEmployee)
        console.log(success,message)
        // Redirect to home if successfully created Employee
        if(success===true){
            window.location.href="/?success=true&message=added"
        }else{
            toaster.create({
                description: message,
                type: "error",
            })
        }
    }

    async function handleEditEmployee(){
        const{success,message}= await editEmployee(newEmployee,empId)

        // Redirect to home if successfully edited Employee
        if(success){
            window.location.href="/?success=true&message=updated"
        }else{
            toaster.create({
                description: message,
                type: "error",
            })
        }
    }

    return(
        <>
            <Heading size={"6xl"} mb={5} textAlign={"center"}>{Object.keys(props).length==0?"Add Employee":"Edit Employee"}</Heading>
            <VStack py={"1rem"} spaceY={2}>
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
                <HStack alignSelf={"start"}>
                    {Object.keys(props).length==0
                    ?
                        <Button 
                            onClick={handleAddEmployee}
                            colorPalette={"green"} 
                            variant={"outline"}
                        >
                            Add Employee
                        </Button>
                    :
                        <Button 
                            onClick={handleEditEmployee}
                            colorPalette={"green"} 
                            variant={"outline"}
                        >
                        Update Employee
                        </Button>
                    }
                    <Link to="/"><Button colorPalette={"orange"} variant={"outline"}>Back to Home</Button></Link>
                </HStack>
                
            </VStack>
            <Toaster />
        </>
    )
}