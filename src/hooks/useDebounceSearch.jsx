import React, { useEffect, useState } from 'react'

export const useDebouncedSearch = (value, delay) => {
    const [searchvalue, setSearchvalue] = useState(value);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setSearchvalue(value);
      }, delay);
  
      return () => clearTimeout(timeoutId);
    }, [value, delay]);
  
    return searchvalue;
  };
