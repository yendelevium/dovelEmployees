import React from "react"
import { useEmployeeStore } from "../store/employee"
import { Table, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function EmployeeList(){
    const {employees, getEmployees}= useEmployeeStore()
    React.useEffect(()=>{
        const fetchEmployees = async ()=>{
            await getEmployees()
        }
        fetchEmployees()
    },[getEmployees])
    // getEmployees is the dependency and NOT employees to avoid redundant calls
    // When you add a new employee it already refreshes employees state
    console.log(employees)
    function renderList(){
      if(employees==[]){
        return(
          <>
            <Heading textAlign={"center"}>No Employees in the List</Heading>
            <Link to="/new"></Link>
          </>
        )
      }return(
        <>
        <Heading>All Employees</Heading>
        <Table.Root size="sm" variant="outline" showColumnBorder={true} my={"1rem"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>EmpId</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Position</Table.ColumnHeader>
              <Table.ColumnHeader>Salary</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map((employee) => (
              <Table.Row key={employee.empId}>
                <Table.Cell>{employee.empId}</Table.Cell>
                <Table.Cell>{employee.name}</Table.Cell>
                <Table.Cell>{employee.position}</Table.Cell>
                <Table.Cell>{employee.salary}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </>
      )
    }
  return (
    <>
      {renderList()}
    </>
  )
}

// const employees = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
//   { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
//   { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
//   { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
//   { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
// ]
