import { Box, Flex, HStack, Heading, Img, VStack } from '@chakra-ui/react';
import "./hero.css"
import Background from './Background';
import astronaut from '../assets/astronaut.png'

const Hero = () => {

  return (
    <Box
      id="hero"
      position={'relative'}
      as={'section'}
      minH={'100vh'}
      w={'full'} pt
      display={'flex'} justifyContent={'center'} alignItems={'center'}
    >
      <Background />
      <VStack
        position={'relative'} zIndex={5} justifyContent={'center'}
        color={'#fff'} minH={'100vh'} width={{base: '100%'}} p={{base: 4,lg: 10, 'xl': 16}} textTransform={'uppercase'} letterSpacing={1.1} 
      >
        <Heading
          textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
        >
          Software
        </Heading>
        <Heading
          textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
          pr={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}}
        >
          Engineer &
        </Heading>
        <Heading
          textAlign={'left'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
          pl={{sm: 9, md: 16, lg: 24, 'xl': 32, '2xl': 60}}
        >
          Full-Stack
        </Heading>
        <HStack
          textAlign={'right'} w={'full'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
          justify={'end'} color={'white'} gap={0}
        >
          <Heading
            textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
            
          >
            Develope
          </Heading>
          <Box
            textAlign={'right'} w={'max-content'} fontSize={{base: '13vw', sm: '10vw', md: '9vw', lg: '8.75vw'}} lineHeight={.95} fontWeight={'regular'}
            pos={'relative'} fontFamily={'Roboto,sans-serif;'} display={'flex'} justifyContent={'center'}
          >
            R
            <Flex
              pos={'absolute'} right={0} left={0} mx={'auto'} top={{base: '-1.2rem', md: '-1.7rem', lg: '-2.1rem', 'xl': '-2.6rem', '2xl': -8}} zIndex={6} w={'max-content'}
            >
              <Img 
                src={astronaut}
                boxSize={{base:'25px', sm: '30px', md: '40px', lg: '50px', 'xl':'60px'}}
              />
            </Flex>
          </Box>
        
        </HStack>
      </VStack>
    </Box>
  );
};

export default Hero;