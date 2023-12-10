import { Card, CardBody, Divider, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const CountryCard = ({name,capital,flags,region,cca2}) => { 
  return (
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
