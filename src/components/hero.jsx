import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
// import heroBackground from '../assets/hero-background.png';
import waves from '../assets/layer-1.png';
import { MdArrowForward } from 'react-icons/md'; 
import { Link } from 'react-scroll'
import './hero.css'
import '../three-utility'
import { pointsOuter } from '../three-utility';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';


const Hero = () => {
  return (
    <Box
      // h="100vh"
      // w={'100%'}
      // backgroundImage={`url(${waves})`}
      // backgroundRepeat="no-repeat"
      // backgroundSize="cover"
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
      id="hero"
      // px={5}
      position={'relative'}
      as={'section'}
    >
      {/* <VStack backgroundColor={'none'} position={'relative'} zIndex={3} mx={5}>
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
      </VStack> */}
      <Box position={'absolute'} zIndex={2} bottom={0}>
        <Image 
          w={'100vw'}
          h={'35vh'}
          src={waves}
          objectFit={{base: 'cover', md: 'fill'}}
        />
      </Box>
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        // style={{
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   width: '100%',
        //   height: '100%',
        //   zIndex: '-4', 
        //   background: '#1E2029',
        // }}
        style={{background: '#1E2029', height: '100vh'}}
      >
        <OrbitControls maxDistance={20} minDistance={10}/>
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0}/>
        <PointCircle />
      </Canvas>
      <VStack position="absolute" zIndex={3} top="50%" left="50%" transform="translate(-50%, -50%)">
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

const PointCircle = () => {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={ref}>
        {/* {pointsInner.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))} */}
        {pointsOuter.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
    </ group>
  )
}

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.03, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;
