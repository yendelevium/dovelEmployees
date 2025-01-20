import React from "react"
import { useEmployeeStore } from "../store/employee"
import { Table, Heading, Button, Container, HStack, Flex } from "@chakra-ui/react"
import { Toaster, toaster } from "./ui/toaster"
import { Link } from "react-router-dom"

export default function EmployeeList(){
    const {employees, getEmployees, deleteEmployee}= useEmployeeStore()
    React.useEffect(()=>{
        const fetchEmployees = async ()=>{
          await getEmployees()
        }
        fetchEmployees()
    },[getEmployees])
    // getEmployees is the dependency and NOT employees to avoid redundant calls
    // When you add a new employee it already refreshes employees state
    function handleDelete(empId){
      const deletion = async ()=> {
        await deleteEmployee(empId)
      }
      deletion()
      toaster.create({
        description: "Successfully deleted employee",
        type: "success",
      })
    }
    function renderList(){
      if(employees.length == 0){
        return(
          <>
            <Container textAlign={"center"}>
              <Heading>No Employees in the List</Heading>
              <Link to="/new"><Button>Add Employee?</Button></Link>
            </Container>
          </>
        )
      }return(
        <>
        <Heading size={"6xl"} mb={5} textAlign={"center"}>All Employees</Heading>
        <Table.Root size="sm" variant="outline" showColumnBorder={true} my={"1rem"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>EmpId</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Position</Table.ColumnHeader>
              <Table.ColumnHeader>Salary</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map((employee) => (
              <Table.Row key={employee.empId}>
                <Table.Cell>{employee.empId}</Table.Cell>
                <Table.Cell>{employee.name}</Table.Cell>
                <Table.Cell>{employee.position}</Table.Cell>
                <Table.Cell>{employee.salary}</Table.Cell>
                <Table.Cell>
                  <HStack>
                    <Link
                      to={`/emp/${employee.empId}/edit`}
                      state= {{
                        ...employee
                      }}
                    ><Button>Edit</Button></Link>
                    <Button onClick={()=>handleDelete(employee.empId)}>Delete</Button>
                    <Link
                      to={`/emp/${employee.empId}`}
                      state= {{
                        ...employee
                      }}
                    ><Button>More Details</Button></Link>
                  </HStack>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Link to="/new"><Button>Add Employee</Button></Link>
      </>
      )
    }
  return (
    <>
      {renderList()}
      <Toaster />
    </>
  )
}