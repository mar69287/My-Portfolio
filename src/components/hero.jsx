import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import heroBackground from '../assets/hero-background.png';
import { MdArrowForward } from 'react-icons/md'; 
import './hero.css'

const Hero = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      backgroundImage={`url(${heroBackground})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <Heading size={'4xl'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
            Marco Ruiz
        </Heading>
        <Text color={'#fff'} fontSize={'2xl'}>
            <span className="letter">F</span>
            <span className="letter">u</span>
            <span className="letter">l</span>
            <span className="letter">l</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">S</span>
            <span className="letter">t</span>
            <span className="letter">a</span>
            <span className="letter">c</span>
            <span className="letter">k</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">W</span>
            <span className="letter">e</span>
            <span className="letter">b</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">D</span>
            <span className="letter">e</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">p</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">|</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">S</span>
            <span className="letter">o</span>
            <span className="letter">f</span>
            <span className="letter">t</span>
            <span className="letter">w</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">E</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">|</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">S</span>
            <span className="letter">p</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">s</span>
            <Text display={'inline-block'} mr={2}></Text>
            <span className="letter">E</span>
            <span className="letter">n</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">u</span>
            <span className="letter">s</span>
            <span className="letter">i</span>
            <span className="letter">a</span>
            <span className="letter">s</span>
            <span className="letter">t</span>
        </Text>
        <HStack mt={1} className='button style1'>
              <Text>View My Projects</Text>
              <MdArrowForward className="arrow-icon"/>
            </HStack>
      </VStack>
    </Box>
  );
};

export default Hero;
