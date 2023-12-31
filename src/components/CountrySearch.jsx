import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CountryCard } from './CountryCard';
import { Box, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, useToast } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import { useDebouncedSearch } from '../hooks/useDebounceSearch';

export const CountrySearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const toast = useToast();
  const debouncedSearch = useDebouncedSearch(search, 1000);

  const handleSearch=()=>{
    if (debouncedSearch) {
      setLoading(true);
      axios.get(`https://restcountries.com/v3.1/currency/${debouncedSearch.toLowerCase()}`)
        .then(res => {
          setResult(res.data);
          setLoading(false);
          setErr(false);
          setSearch("");
        })
        .catch(err => {
          console.log(err);
          setErr(true);
          setLoading(false);
        })
    }
  }

  useEffect(() => {
    handleSearch()
    setErr(false)
   
 
  }, [debouncedSearch]);

  useEffect(() => {
    if (err) {
      toast({
        title: `Invalid Input!`,
        description: " Please Enter a valid Currency",
        status: "error",
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [err, toast]);

  return (
    <Box>
      <Box>
        <Heading mt={50} color={'blue.500'} ml={"33%"} fontWeight={"500"}>Search Country By Currency</Heading>
        <Flex>
          <InputGroup
            width="40%"
            ml="30%"
            mt={35}
            p={4}
          >
            <InputLeftElement pointerEvents='none' ml={4} mt={4} color="gray.500">
              <SearchIcon />
            </InputLeftElement>
            <Input
              type="text"
              placeholder='Search by Currency INR, EUR'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
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
            <CountryCard key={id} {...item} />
          ))}
        </Grid>
      ) : (
        <Text textAlign={'center'} mt={50} color={'tomato'} fontSize={"2xl"}>Please Enter a Currency</Text>
      )}
    </Box>
  );
};
