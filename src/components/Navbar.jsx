import { Box, HStack } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [ active, setActive ] = useState(0)
  
  return (
    <HStack gap={3} bgColor={'rgba(0, 0, 0, 0.3)'} w={'max-content'} zIndex={3} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} bottom={'2rem'} p={".7rem 1.7rem"} borderRadius={50} backdropBlur={'15px'}>
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-70} duration={500}>
            <Box color={'#999'} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
                <AiOutlineHome />
            </Box>
            
        </Link>
        <Link  activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>
            <Box color={'#999'} fontSize={'1.5rem'} p={4} borderRadius={50}  _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
                <BsPerson />
            </Box>
        </Link>
        <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>
            <Box color={'#999'} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
                <BiBook />
            </Box>
        </Link>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500}>
            <Box color={'#999'} fontSize={'1.5rem'} borderRadius={50} p={4} _hover={{cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.4)', color: '#fff', transition: 'all .5s ease' }}>
                <BiMessageDetail />
            </Box>
        </Link>
    </HStack>
  )
}

export default Navbar