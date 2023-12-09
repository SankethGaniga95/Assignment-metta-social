import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CountryCard } from './CountryCard';
import { Box, Button, Flex, Grid, Heading, Input, Spinner, Text, useToast } from '@chakra-ui/react';


export const CountrySearch = () => {
    const [search,setSearch]=useState("")
    const [result,setResult]=useState([])
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(false)
    const toast=useToast()


      const handleClick=()=>{
        setLoading(true)
        axios.get(`https://restcountries.com/v3.1/currency/${search.toLowerCase()}`)
        .then(res=>{setResult(res.data)
        setLoading(false)
        setErr(false)
        setSearch("")
       
      })
        .catch(err=>{
          console.log(err)
          setErr(true)
          setLoading(false)
      })

      }
    
      useEffect(()=>{
        if(err){
        toast({
          title: `Invalid Input!`,
          description: " Please Enter a valid Currency",
          status: "error",
          isClosable: true,
          position: 'top-right'
        })
      }
      },[err,toast])

  return (
    <Box >
        <Box>
        <Heading mt={50} color={'blue.500'} ml={"33%"} fontWeight={"500"}>Search Country By Currency</Heading>
        <Flex>
        <Input 
        type="text"
        placeholder='Search By currency INR, EUR'
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        width="35%"
        ml="30%"
        mt={50}
        mr={2}
        p={4} />
        <Button onClick={handleClick} mt={50} backgroundColor={'blue.500'} color={'white'}>Search</Button>
        </Flex>
        </Box>

       {loading ? (
      <Box ml={"48%"} mt={50}>
        <Spinner 
         thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl' />
      </Box>
      ) : err ? null : result.length > 0 ? (
        <Grid templateColumns='repeat(4, 1fr)' mt={50}>
          {result.map((item, id) => (
            <CountryCard key={id} name={item.name} {...item} />
          ))}
        </Grid>
      ) : (
        <Text textAlign={'center'} mt={50} color={'tomato'}fontSize={"2xl"}>Please Enter a Currency</Text>
      )}
    </Box>
   
  )
}
