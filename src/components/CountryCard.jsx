import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export const CountryCard = ({name,capital,flags,region,cca2}) => { 
  return (
//     <div style={{border:"1px solid gray",marginLeft:"20px",textAlign:"left",padding:"20px 40px",marginTop:"40px",width:"200px",height:"250px",borderRadius:"15px"}}>
//         <div style={{width:"200px"}}>
//         {Object.entries(flags)?<img src={`https://flagsapi.com/${cca2}/shiny/64.png`} alt={error?flags.alt:null} onError={handleImageError} style={{width: "200px",
//   height:"100px",
//   border:"1px solid #000",
//   margin: "10px 0",objectFit:"fill",border:"none"}}/>:null}
//         </div>
        
//         {Object.entries(name.common)?<h4>Country:{name.common}</h4>:null}
//         {Object.entries(capital)?<h5>Capital:{capital}</h5>:null}
//         {Object.entries(region)?<h5>Continent:{region}</h5>:null}
//     </div>
 <Card maxW='sm' bg="blue.400" color='white' ml={'4'} mr={'4'} mt={'5'}> 
 <CardBody >
 
  {Object.entries(flags)? <Image
    src={`https://flagsapi.com/${cca2}/shiny/64.png`}
    borderRadius='lg'
    boxSize='300px'
    objectFit='fill'
    alt={`${name.common}'s Flag Image failed to load` }
  />:null}
  <Divider/>
   <Stack mt='6' spacing='3' ml={"5"}>
  {Object.entries(name.common)?<Text fontSize={18} fontWeight={"bold"} fontFamily={"sans-serif"}>Country: {name.common}</Text>:null}
        {Object.entries(capital)?<Text fontSize={17} fontWeight={"bold"} fontFamily={"sans-serif"}>Capital: {capital}</Text>:null}
        {Object.entries(region)?<Text fontSize={17} fontWeight={"bold"} fontFamily={"sans-serif"}>Continent:{region}</Text>:null}
  </Stack>
 </CardBody>
 </Card> 


  )
}
