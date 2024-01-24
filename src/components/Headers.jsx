import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Headers = ({ left, right}) => {
  return (
    <Box
        w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4}
        mb={{base: 1, md: 7, lg: 10}}
    >
        <Heading
            // size={{ base: '3xl', md: '4xl' }}
            fontSize={{base: '45px', md: '70px'}}
            fontWeight={'thin'} textTransform={'uppercase'}
        >
            {left}
        </Heading>
        <Heading
            // size={{ base: '30px', md: '4xl' }}
            fontSize={{base: '45px', md: '70px'}}
            fontWeight={'thin'} textTransform={'uppercase'}
        >
            {right}
        </Heading>
    </Box>
  )
}

export default Headers