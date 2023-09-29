import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import heroBackground from '../assets/hero-background.png';
import { MdArrowForward } from 'react-icons/md'; 
import { Link } from 'react-scroll'
import './hero.css'

const Hero = () => {
  return (
    <Box
      h="100vh"
      backgroundImage={`url(${heroBackground})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
      id="hero"
      px={5}
    >
      <VStack>
        <Heading size={{ base: '2xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
            Marco Ruiz
        </Heading>
        <Box justifyContent={'center'} display={'flex'} flexWrap={'wrap'}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} color={'#fff'} textAlign={'center'} display={'inline-block'} whiteSpace={'nowrap'}>
            <span className="letter">F</span>
            <span className="letter">u</span>
            <span className="letter">l</span>
            <span className="letter">l</span>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">S</span>
            <span className="letter">t</span>
            <span className="letter">a</span>
            <span className="letter">c</span>
            <span className="letter">k</span>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">W</span>
            <span className="letter">e</span>
            <span className="letter">b</span>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">D</span>
            <span className="letter">e</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">p</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <span style={{ marginRight: '9px' }}></span>
            <span >|</span>
          </Text>
          <Text color={'#fff'} fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} display={'inline-block'} whiteSpace={'nowrap'}>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">S</span>
            <span className="letter">o</span>
            <span className="letter">f</span>
            <span className="letter">t</span>
            <span className="letter">w</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">E</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <span style={{ marginRight: '9px' }}></span>
            <span>|</span>
          </Text>
          <Text color={'#fff'} fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} display={'inline-block'} whiteSpace={'nowrap'}s>
            <span style={{ marginRight: '9px' }}></span>
            <span className="letter">S</span>
            <span className="letter">p</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">s</span>
            <span style={{ marginRight: '9px' }}></span>
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
        </Box>
        <Link to='projects' spy={true} smooth={true}>
          <HStack mt={1} className='button style1'>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>View My Projects</Text>
            <MdArrowForward className="arrow-icon"/>
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
};

export default Hero;
