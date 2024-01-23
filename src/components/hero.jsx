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
      {/* <AnimatedHeading variants={variants} initial={'hidden'} animate={mainControls} transition={{duration: 0.5, delay: 0.1}} size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}> */}
      <VStack
        position="absolute" gap={2} zIndex={3} bottom={0} top={0} right={0} left={0} m={'auto'} alignItems={'center'} justifyContent={'center'} display={'flex'}
        h={'max-content'} w={'max-content'}
      >
        <Heading
          size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
        >
          Marco Ruiz
        </Heading>
        <HStack display={'flex'} w={{base:'18rem', sm:'30rem', md: '48rem'}} gap={0} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} fontSize={{ base: 'xl', md: '2xl' }} color={'#fff'} textAlign={'center'}>
          <Box>
            <Text >Full-Stack Web Developer</Text>
          </Box>
          <Show above='sm'>
            <Box border={'1px solid '} h={'1rem'} mx={3} />
          </Show>
          <Box>
            <Text >Software Engineer</Text>
          </Box>
          <Show above='md'>
            <Box border={'1px solid '} h={'1rem'} mx={3} />
          </Show>
          <Box>
            <Text >Sports Enthusiast</Text>
          </Box>
        </HStack>
      </VStack>

    </Box>
  );
};

export default Hero;
      {/* <VStack gap={0} ref={heroRef} lineHeight={[1.3,.5]} position="absolute" zIndex={3} top="50%" left="50%" transform="translate(-50%, -50%)" w={'max-content'}>
        <AnimatedHeading transition={{duration: 0.5, delay: 0.1}} size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
            Hi There i&apos;m
        </AnimatedHeading >
        <Box display={'flex'} w={'full'} px={1} justifyContent={'space-between'} alignItems={'center'} pos={'relative'}>
          <Text fontSize={['xs','xs', 'sm']} color={'whiteAlpha.800'}>Engineer</Text>
          <Text fontSize={['xs','xs', 'sm']} color={'whiteAlpha.800'}>Developer</Text>
          <Box position={'absolute'} left={0} right={0} mx={'auto'} w={'full'} color={'whiteAlpha.800'} textAlign={'center'} fontSize={['xs', 'xs', 'sm']}>Sports Enthusiast</Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
          <AnimatedHeading 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: {delay: .4, duration: .4} }}
            transition={{duration: 0.5, delay: 0.1}} size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
              Marco 
          </AnimatedHeading >
          <AnimatedHeading 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0, transition: {delay: .4, duration: .4} }}
            transition={{duration: 0.5, delay: 0.1}} size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
              Ruiz
          </AnimatedHeading >
        </Box>
      </VStack>
      <Box position={'absolute'} zIndex={4} bottom={3} left={3} w={32} color={'#f1f5f9'} fontWeight={'semibold'} fontSize={['sm', 'sm', 'md']}>
        Committed to turning <span style={{color: '#f1f5f9'}}>complex problems</span> into <span style={{color: 'RGB(255, 255, 255)'}}>intuitive designs</span>.
      </Box> */}