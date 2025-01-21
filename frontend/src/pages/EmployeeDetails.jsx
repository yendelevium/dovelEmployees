import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'
import { Badge, Box, Card, Image, Button, Flex, Heading } from "@chakra-ui/react"
import { useEmployeeStore } from "../store/employee"


const EmployeeDetails = () => {
  const location = useLocation()
  const employee = location.state
  const {deleteEmployee}= useEmployeeStore()
  const {empId} = useParams()
  console.log(empId)

  // Add toast
  function handleDelete(empId){
    const deletion = async ()=> {
      await deleteEmployee(empId)
    }
    window.location.href="/?success=true&message=deleted"
    deletion()
  }
  return (
    <Flex align={"center"} direction="column">
      <Heading size={"6xl"} mb={5}>Employee Details</Heading>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
        <Image
          objectFit="cover"
          maxW="200px"
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">Empmploee Name: {employee.name}</Card.Title>
            <Card.Description>
              About : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, corporis accusamus. Mollitia, nam praesentium alias earum omnis laboriosam consectetur esse recusandae sequi commodi at pariatur, qui, voluptatibus labore ab quo.
            </Card.Description>
            <Box m={1}>Postion:<Badge>{employee.position}</Badge></Box>
            <Box m={1}>Salary:<Badge>&#8377;{employee.salary}</Badge></Box>
          </Card.Body>
          <Card.Footer>
            <Link
              to={`/emp/${empId}/edit`}
              state= {{
                ...employee
              }}
            ><Button colorPalette={"green"} variant={"outline"}>Edit</Button></Link>
            <Button onClick={()=>handleDelete(empId)} colorPalette={"red"} variant={"outline"}>Delete</Button>
            <Link
              to="/"
            ><Button colorPalette={"orange"} variant={"outline"}>Back to Home</Button></Link>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Flex>
  )
}

export default EmployeeDetails