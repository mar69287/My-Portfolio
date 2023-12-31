import { Box, Grid, GridItem, HStack, Image, VStack, Link, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import resume from '../assets/Marco-Software-Resume.pdf'
import './About.css'
import FrontSkills from "./FrontSkills";
import BackSkills from "./BackSkills";
import { MdArrowForward } from 'react-icons/md';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'

const AnimatedGrid = motion(Grid);

const About = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const ref = useRef(null)
  const isInView = useInView(ref, {once: 'true'});
  const mainControls = useAnimation();
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) 
    {
      mainControls.start('visible')
    }

  }, [isInView])

  return (
    <Box ref={ref} bgColor={"#fff"} id="about" width={{xl: '100%', '2xl': '1400px'}} m='0 auto'>
      <AnimatedGrid
        templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }} 
        gap={0} 
        borderTop={isLargeScreen ? '2px solid #ddd' : 'none'}
        mt={20}
        mx={{base: 0, lg: 20}}
        mb={20}
        variants={variants} initial={'hidden'} animate={mainControls} transition={{duration: 0.5, delay: 0.1}}
      >
        <GridItem colSpan={{ base: 1, lg: 2 }} borderRight={isLargeScreen ? '2px solid #ddd' : 'none'}>
          <VStack pt={{base: 5, lg: 10}} px={{base: 5, lg: 10}} pb={5}>
            <Image 
              src={profile}
              w={'320px'}
              h={'350px'}
            />
            <HStack justifyContent={'center'} alignItems={'center'} gap={10}>
              <Link 
                href="https://github.com/mar69287" 
                isExternal 
                color={'#616161'} 
                fontSize={{base: '2.5rem', lg: '2.8rem'}}
                _hover={{
                  color: "#00989D", 
                  transition: "color 0.3s ease",
                }}
              >
                <AiFillGithub />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/marcoruizjr/" 
                isExternal 
                color={'#616161'} 
                fontSize={{base: '2.5rem', lg: '2.8rem'}}
                _hover={{
                  color: "#00989D", 
                  transition: "color 0.3s ease", 
                }}
              >
                <AiFillLinkedin />
              </Link>
              <Link 
                href="mailto:marcoa.ruiz97@gmail.com" 
                isExternal 
                color={'#616161'} 
                fontSize={{base: '2.5rem', lg: '2.8rem'}}
                _hover={{
                  color: "#00989D", 
                  transition: "color 0.3s ease", 
                }}
              >
                <AiOutlineMail />
              </Link>
            </HStack>
            <Link isExternal href={resume} _hover={{ textDecoration: 'none' }}>
                <HStack mt={6} className='btn'>
                    <Text fontSize={'2xl'} fontWeight={'semibold'}>Resume</Text>
                    <MdArrowForward className="arrow-icon"/>
                </HStack>
            </Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 4 }} pl={{base: 10, lg: 20}} pr={10} py={{base: 5, lg: '3.5rem'}} >
            <VStack justifyContent={'center'} alignItems={'flex-start'}>
                <Text color={'#b9b9b9'} fontSize={"xl"} fontWeight={'medium'}>
                  ABOUT ME
                </Text>
                <Text color={'rgb(33, 36, 46)'} fontSize={"2xl"} mt={3}>
                  I am a former Mechanical Engineer turned Developer. I have found a passion for both the precision of engineering and the artistry of coding, one that drives me to create cohesive,
                  scalable, and user-friendly applications.  
                </Text>
                <Text color={'rgb(33, 36, 46)'} fontSize={"2xl"} mt={1}>
                  Outside of programming, I love the outdoors. From camping, to playing sports, to just taking a drive with my beautiful dog. Favorite sports team is FC Barcelona. Visca Barca!
                </Text>
            </VStack> 
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 6 }} mt={5} borderBottom={'2px solid #ddd'} className="logos" mx={10}>
          <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={{base: '6rem', lg:'10rem'}} color={'rgb(33, 36, 46)'} size={{base: 'md', lg: 'lg'}} >
                  Front End
              </Heading>
            </HStack>
            <FrontSkills />
            <FrontSkills />
            <FrontSkills />
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 6 }} className="logos" mx={10}>
          <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={{base: '6rem', lg:'10rem'}} color={'rgb(33, 36, 46)'} size={{base: 'md', lg: 'lg'}} >
                  Back End
              </Heading>
            </HStack>
            <BackSkills />
            <BackSkills />
            <BackSkills />
          </HStack>
        </GridItem>
      </AnimatedGrid> 
    </Box>
  );
};

export default About;
