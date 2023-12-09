import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Box
    width="100%"
    height="80px"
    color="white"
    bg={"blue.500"}
    padding="10px 0px 0px 70px" 

    >
        <Heading 
        marginTop="0px"
        fontSize={"2xl"}>Metta 
        <br/>
        Social</Heading>
    </Box>
  )
}
