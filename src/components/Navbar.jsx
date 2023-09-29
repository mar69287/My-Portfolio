import { HStack } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  
  return (
    <HStack as={'nav'} gap={2} bgColor={'rgba(0, 0, 0, 0.3)'} w={'max-content'} zIndex={6} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} bottom={'2rem'} p={".7rem 1.7rem"} borderRadius={50} backdropBlur={'15px'}>
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={0} duration={500} className='nav-icons'>
                <AiOutlineHome />
        </Link>
        <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='nav-icons'>
                <BsPerson />
        </Link>
        <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-200} duration={500} className='nav-icons'>
                <BiBook />
        </Link>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-200} duration={500} className='nav-icons'>
                <BiMessageDetail />
        </Link>
    </HStack>
  )
}

export default Navbar