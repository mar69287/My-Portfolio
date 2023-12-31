import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import waves from '../assets/layer-1.png';
import { MdArrowForward } from 'react-icons/md'; 
import { Link } from 'react-scroll'
import './hero.css'
import '../three-utility'
import { pointsOuter } from '../three-utility';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'

const AnimatedHeading = motion(Heading);
const AnimatedBox = motion(Box);
const AnimatedStack = motion(HStack);

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {once: 'true'});
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{background: '#1E2029', height: '100vh'}}
      >
        <OrbitControls maxDistance={20} minDistance={10}/>
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0}/>
        <PointCircle />
      </Canvas>
      <VStack ref={heroRef}  position="absolute" zIndex={3} top="50%" left="50%" transform="translate(-50%, -50%)">
        <AnimatedHeading variants={variants} initial={'hidden'} animate={mainControls} transition={{duration: 0.5, delay: 0.1}} size={{ base: '2xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}>
            Marco Ruiz
        </AnimatedHeading >
        <AnimatedBox variants={variants} initial={'hidden'} animate={mainControls} transition={{duration: 0.5, delay: 0.1}} justifyContent={'center'} display={'flex'} flexWrap={'wrap'}>
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
        </AnimatedBox>
        <Link to='projects' spy={true} smooth={true}>
          <AnimatedStack variants={variants} initial={'hidden'} animate={mainControls} transition={{duration: 0.5, delay: 0.1}} mt={1} className='button style1'>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>View My Projects</Text>
            <MdArrowForward className="arrow-icon"/>
          </AnimatedStack>
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
