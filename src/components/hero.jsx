import { Box, Divider, HStack, Heading, Hide, Image, Show, Text, VStack } from '@chakra-ui/react';
import waves from '../assets/layer-1.png';
import { MdArrowForward } from 'react-icons/md'; 
import { Link } from 'react-scroll'
import './hero.css'
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'
import Background from './Background';

const AnimatedHeading = motion(Heading);
const AnimatedBox = motion(Box);
const AnimatedStack = motion(HStack);

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {once: 'true'});
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) 
    {
      mainControls.start('visible')
    }

  }, [isInView])

  

  return (
    <Box
      id="hero"
      position={'relative'}
      as={'section'}
    >
      <Box position={'absolute'} zIndex={2} bottom={0}>
        <Image 
          w={'100vw'}
          h={'35vh'}
          src={waves}
          objectFit={{base: 'cover', md: 'fill'}}
        />
      </Box>
      <Background />
      <Box
         position="absolute" gap={0} zIndex={3} bottom={0} top={0} right={0} left={0} m={'auto'}  alignItems={'center'}
         h={'10rem'} w={{base: '100%', lg: '1000px', '2xl': '1400px'}} justifyContent={'center'} display={'flex'}
         px={1}
      >
        <VStack
          alignItems={'start'} gap={0}
          h={'max-content'} w={'max-content'}
        >
          <Heading
            size={{ base: 'sm', md: 'md' }} textAlign={'left'} fontWeight={'thin'} color={'#fff'}
            ml={1}
          >
            Software
          </Heading>
          <HStack justifyContent={'start'} alignItems={'end'} gap={0}>
            <Heading
              size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
              m={0}
              style={{lineHeight: '.8'}}
            >
              Engineer
            </Heading>
            <Heading
              size={{ base: 'sm', md: 'md' }} textAlign={'left'} fontWeight={'normal'} color={'#fff'}
              ml={1}
            >
              &
            </Heading>
          </HStack>
          <Heading
            size={{ base: 'sm', md: 'md' }} textAlign={'left'} fontWeight={'thin'} color={'#fff'}
            ml={1}
          >
            Full-Stack
          </Heading>
          <Heading
              size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
              m={0}
              style={{lineHeight: '.8'}}
            >
              Developer
            </Heading>
        </VStack>
      </Box>
    </Box>
  );
};

export default Hero;