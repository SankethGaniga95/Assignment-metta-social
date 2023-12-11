import { Card, CardBody, Divider, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const CountryCard = ({name,capital,flags,region,cca2,currencies}) => { 
  return (
       <Card maxW='sm' bg="blue.300" color='white' m={'4'}> 
         <CardBody>
           {Object.entries(flags)? <Image
             src={`https://flagsapi.com/${cca2}/shiny/64.png`}
             boxSize='250px'
             objectFit='fill'
             ml={'2'}
             alt={`${name.common}'s Flag Image failed to load` }
             />:null}
          <Divider/>
          <Stack mt='5' spacing='2' ml={"5"}>
          {name.common && (
          <Text fontSize={18} fontWeight={"bold"} fontFamily={"sans-serif"}>
           Country: {name.common}
          </Text>
          )}
           {capital && (
           <Text fontSize={18} fontWeight={"bold"} fontFamily={"sans-serif"}>
           capital: {capital}
           </Text>
           )}
           {region && (
           <Text fontSize={18} fontWeight={"bold"} fontFamily={"sans-serif"}>
           Continent: {region}
           </Text>
           )}
           {currencies && (
           <Text fontSize={17} fontWeight={"bold"} fontFamily={"sans-serif"}>
            Currencies: {Object.values(currencies).map(currency => currency.name).join(', ')}
           </Text>
           )}
          </Stack>
        </CardBody>
      </Card> 


  )
}
