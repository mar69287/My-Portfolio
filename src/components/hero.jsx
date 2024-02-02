import { Box, Flex, HStack, Heading, Img, VStack, Text } from '@chakra-ui/react';
import "./hero.css"
import Background from './Background';
import astronaut from '../assets/astronaut.png'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from 'framer-motion'
import Reveal from './Reveal';

const Hero = () => {

  return (
    <Box
      id="hero"
      position={'relative'}
      as={'section'}
      minH={'100vh'}
      w={'full'} 
      display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}
    >
      <Background />
      <VStack
        position={'relative'} zIndex={5} justifyContent={'center'}
        color={'#fff'} minH={'100vh'} width={{base: '100%'}} p={{base: 4,lg: 10, 'xl': 16}} textTransform={'uppercase'} letterSpacing={1.1}
        fontFamily={'League Spartan, sans-serif'}
      >
        <Reveal hidden={{ opacity: 0, y: 75 }} visible={{ opacity: 1, y: 0 }}> 
          <Heading
            textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
          >
            Software
          </Heading>
          <Heading
            textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
            pr={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}}
          >
            Engineer &
          </Heading>
          <Heading
            textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
            pl={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}}
          >
            Full-Stack
          </Heading>
          <HStack
            textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
            justify={'end'} color={'white'} gap={0}
          >
            <Heading
              textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
          
            >
              Develope
            </Heading>
            <Box
              textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={1}
              pos={'relative'}  display={'flex'} justifyContent={'center'}
            >
              R
              <Flex
                pos={'absolute'} right={0} left={{base: '-.4rem', lg: '-.9rem', '2xl': '-.8rem'}} mx={'auto'} top={{base: '-1.4rem', sm: '-1.63rem', md: '-1.9rem', lg: '-2.4rem', 'xl': '-3rem', '2xl': '-2.2rem',}} zIndex={6} w={'max-content'}
              >
                <Img
                  src={astronaut}
                  boxSize={{base:'25px', sm: '28px', md: '33px', lg: '40px', 'xl':'60px'}}
                />
              </Flex>
            </Box>
          
          </HStack>
        </Reveal>
        <Flex
          w={'full'} zIndex={5} color={'#999999'} fontSize={'xl'} justifyContent={'start'} pl={{base: 4,lg: 10, 'xl': 16}}
          pos={'absolute'} bottom={{base: 5, md: 10}} left={0} textTransform={'lowercase'} flexDirection={'column'}
          fontFamily={'Libre Baskerville, serif'}
        >
          <Reveal hidden={{ opacity: 0, y: 75 }} visible={{ opacity: 1, y: 0 }}>
            <HStack
              fontSize={{base: '17px', md: 'xl', '2xl': '4xl'}}
            >
              <BsArrowReturnRight style={{color: '#fff'}}/>
              <Text>focusing on solving complex</Text>
            </HStack>
            <HStack fontSize={{base: '17px', md: 'xl', '2xl': '4xl'}}>
              <Box display={'flex'}>problems with&nbsp;<AnimatedHeader text={'simple solutions'}/></Box>
            </HStack>
          </Reveal>
        </Flex>
      </VStack>
    </Box>
  );
};


const AnimatedHeader = ({ text }) => {

  return (

           <Box>
             <motion.span
              animate='visible'
              initial='hidden' variants={boxVariant}
             >{text.split('').map((char, index) => (
              <motion.span key={index}
                variants={letterAnimations}
                style={{color: '#fff'}}
              >
                {char}
              </motion.span>
                     ))}</motion.span>
           </Box>
    
  )
}

export default Hero;

const boxVariant = {
  hidden: {
    opacity: 0,
  
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: .5
    },
  },
}

const letterAnimations = {
  hidden: {
    opacity: 0,
    
  },
  visible: {
    opacity: 1,
    
  },
}