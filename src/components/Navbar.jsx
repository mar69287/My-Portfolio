import { Box, HStack } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [ active, setActive ] = useState(0)
  
  return (
    <HStack gap={3} bgColor={'rgba(0, 0, 0, 0.3)'} w={'max-content'} zIndex={3} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} bottom={'2rem'} p={".7rem 1.7rem"} borderRadius={50} backdropBlur={'15px'}>
        <Box color={active === 0 ? '#fff' : '#999'} onClick={() => setActive(0)} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
            <AiOutlineHome />
        </Box>
        <Box color={active === 1 ? '#fff' : '#999'} onClick={() => setActive(1)} fontSize={'1.5rem'} p={4} borderRadius={50}  _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
            <BsPerson />
        </Box>
        <Box color={active === 2 ? '#fff' : '#999'} onClick={() => setActive(2)} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
            <BiBook />
        </Box>
        <Box color={active === 3 ? '#fff' : '#999'} onClick={() => setActive(3)} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
            <BiMessageDetail />
        </Box>
    </HStack>
  )
}

export default Navbar