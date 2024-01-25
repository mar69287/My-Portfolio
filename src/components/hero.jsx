import { Box, HStack, Heading, Image, VStack } from '@chakra-ui/react';
import waves from '../assets/layer-1.png';
import "./hero.css"
import { motion, AnimatePresence } from 'framer-motion'
import Background from './Background';

const Hero = () => {

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
      <AnimatePresence>
        <Box
           position="absolute" gap={0} zIndex={3} bottom={0} top={0} right={0} left={0} m={'auto'}  alignItems={'center'}
           h={'10rem'} w={'max-content'} justifyContent={'center'} display={'flex'}
           px={1}
           as={motion.div} variants={boxVariant} animate='visible' initial='hidden' whileHover="hover" 
        >
          <VStack
            alignItems={'start'} gap={0}
            h={'max-content'} w={'max-content'}
          >

            <WordShift word1={'Software'} word2={'Mechanical'}/>
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
            <WordShift word1={'Full-Stack'} word2={'Web'}/>
            <Heading
                size={{ base: '3xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
                m={0}
                style={{lineHeight: '.8'}}
              >
                Developer
              </Heading>
          </VStack>
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default Hero;

const WordShift = ({ word1, word2 }) => {
  return (
    <Box 
      h={{base: '16px', md: '23px', lg:'23px'}} display={'inline-block'} overflow={'hidden'} lineHeight={1.1}
      fontSize={{ base: 'sm', md: 'xl' }} ml={1} textAlign={'left'} fontWeight={'thin'} color={'#fff'} fontFamily={'Roboto, sans-serif'}
    >
      <Box
        as={motion.div}
        display={'flex'} flexDirection={'column'} 
        initial={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Box>{word1}</Box>
        <Box>{word2}</Box>
      </Box>
    </Box>
  )
}

const boxVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5
    },
  },
}