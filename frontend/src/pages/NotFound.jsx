import { Flex, Box, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

export const NotFound = () => {
  return (
    <Flex align={"center"} direction={"column"}>
        <Heading size={"6xl"}>404 PAGE NOT FOUND</Heading>
        <Link to="/"><Button>Back to Home</Button></Link>
    </Flex>
  )
}
