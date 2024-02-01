import { Box, Flex, HStack, Heading, Img, Stack, VStack } from '@chakra-ui/react';
import "./hero.css"
import Background from './Background';
import astronaut from '../assets/astronaut.png'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from 'framer-motion'

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
        <Heading
          textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8}
        >
          Software
        </Heading>
        <Heading
          textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8}
          pr={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}} 
        >
          Engineer &
        </Heading>
        <Heading
          textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8}
          pl={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}} 
        >
          Full-Stack
        </Heading>
        <HStack
          textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8} 
          justify={'end'} color={'white'} gap={0}
        >
          <Heading
            textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8} 
            
          >
            Develope
          </Heading>
          <Box
            textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.8} 
            pos={'relative'}  display={'flex'} justifyContent={'center'} 
          >
            R
            <Flex
              pos={'absolute'} right={0} left={{base: '-.4rem', lg: '-.9rem', '2xl': '-.8rem'}} mx={'auto'} top={{base: '-1.4rem', sm: '-1.63rem', md: '-1.9rem', lg: '-2.4rem', 'xl': '-3rem', '2xl': '-3.5rem'}} zIndex={6} w={'max-content'}
            >
              <Img 
                src={astronaut}
                boxSize={{base:'25px', sm: '28px', md: '33px', lg: '40px', 'xl':'60px'}}
              />
            </Flex>
          </Box>
        
        </HStack>
        <Flex
          w={'full'} zIndex={5} color={'white'} fontSize={'xl'} justifyContent={'start'} pl={{base: 4,lg: 10, 'xl': 16}}
          pos={'absolute'} bottom={{base: 5, md: 10}} left={0} textTransform={'lowercase'}
        >
          <AnimatedHeader text={'focusing on solving complex problems with simple solutions'} />
        </Flex>
      </VStack>
    </Box>
  );
};

const AnimatedHeader = () => {
  const text1 = 'focusing on solving complex'
  const text2 = 'problems with'
  const text3 = 'simple solutions'
  return (
    
    <Stack gap={0} fontSize={{base: '17px', md: 'xl', '2xl': '4xl'}} color={'#999999'}>
      <HStack 
        alignItems={'center'} 
        fontFamily={'Libre Baskerville, serif'}
      >
        <BsArrowReturnRight style={{color: '#fff'}}/>
         <motion.span 
          // initial={'hidden'} animate={'visible'} transition={{staggerChildren: .05}}
         >{text1.split('').map((char, index) => (
          <motion.span key={index}
            // variants={letterAnimations}
          >
            {char}
          </motion.span>
        ))}</motion.span>
      </HStack>
      <HStack alignItems={'center'} fontFamily={'Libre Baskerville, serif'}>
        <motion.span
          // initial={'hidden'} animate={'visible'} transition={{staggerChildren: .1}} 
          >{text2.split('').map((char, index) => (
            <motion.span key={index}
              // variants={letterAnimations}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          // initial={'hidden'} animate={'visible'} transition={{staggerChildren: .1}} 
          style={{color: '#fff'}}
          >{text3.split('').map((char, index) => (
            <motion.span key={index}
              // variants={letterAnimations}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </HStack>
    </Stack>
  )
}

export default Hero;

const letterAnimations = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
}