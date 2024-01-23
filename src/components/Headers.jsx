import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Headers = ({ left, right}) => {
  return (
    <Box
        w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4}
    >
        <Heading
            size={{ base: '3xl', md: '4xl' }}
            fontWeight={'thin'} textTransform={'uppercase'}
        >
            {left}
        </Heading>
        <Heading
            size={{ base: '3xl', md: '4xl' }}
            fontWeight={'thin'} textTransform={'uppercase'}
        >
            {right}
        </Heading>
    </Box>
  )
}

export default Headers