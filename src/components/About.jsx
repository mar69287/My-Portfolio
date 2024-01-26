import { Box, Grid, GridItem, HStack, Image, VStack, Link, Text } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiOutlineMail } from 'react-icons/ai'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import resume from '../assets/Marco-Software-Resume.pdf'
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion'
import Headers from "./Headers";
import Skills from "./Skills";

const AnimatedGrid = motion(Grid);

const About = () => {

  return (
    <Box  
      bgColor={"#000"} id="about" minH={'full'} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'center'} pt={{base:20, lg: 24}}
    >
      <Headers left={'about'} right={'me'} />
      <AnimatedGrid
        templateColumns={{ base: "1fr", md: '1fr 1fr', lg: "repeat(6, 1fr)" }} 
        gap={0} 
        borderTop={{base: 'none', md: '2px solid #ddd'}}
        mx={{base: 0, lg: 0}}
        mb={20}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: {delay: .7} }}
        width={{xl: '100%', '2xl': '1400px'}}
      >
        <GridItem colSpan={{ base: 1, lg: 2 }} borderRight={{base: 'none', md: '2px solid #ddd'}}>
          <VStack pt={{base: 5, lg: 10}} px={{base: 5}} pb={5} >
            <Box position={'relative'}>
              <Image
                src={profile}
                w={'320px'}
                h={'350px'}
                borderRadius={6}
                objectFit='cover'
              />
              <VStack
                w={'full'}
                position={'absolute'}
                bottom={0} p={2}
                zIndex={3} color={'#fff'}
                justifyContent={'center'}
                alignItems={'start'}
                gap={1}
                fontSize={{base: 'sm', lg: 'md'}}
              >
                <Text bg={'rgba(97, 97, 97, 0.9)'} color={'white'} p={2} borderRadius={10}>
                  Hello! 👋🏼
                </Text>
                <Text bg={'rgba(97, 97, 97, 0.9)'} color={'white'} p={2} borderRadius={10}>
                  My name is Marco Ruiz
                </Text>
              </VStack>
            </Box>
            <HStack justifyContent={'center'} alignItems={'center'} gap={10}>
              <Link 
                href="https://github.com/mar69287" 
                isExternal 
                color={'#fff'} 
                fontSize={{base: '1.1rem', lg: '1.2rem'}}
                borderRadius={'full'}
                bg={'rgba(97, 97, 97, 0.9)'}
                border={'1px solid rgba(255, 255, 255, .1)'}
                p={2}
                _hover={{
                  color: "#e31b60", 
                  transition: "color .4s ease",
                }}
              >
                <FiGithub />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/marcoruizjr/" 
                isExternal 
                color={'#fff'} 
                fontSize={{base: '1.1rem', lg: '1.2rem'}}
                borderRadius={'full'}
                bg={'rgba(97, 97, 97, 0.9)'}
                border={'1px solid rgba(255, 255, 255, .1)'}
                p={2}
                _hover={{
                  color: "#e31b60", 
                  transition: "color 0.4s ease",
                }}
              >
                <FaLinkedinIn />
              </Link>
              <Link 
                href="mailto:marcoa.ruiz97@gmail.com" 
                isExternal 
                color={'#fff'} 
                fontSize={{base: '1.1rem', lg: '1.2rem'}}
                borderRadius={'full'}
                bg={'rgba(97, 97, 97, 0.9)'}
                border={'1px solid rgba(255, 255, 255, .1)'}
                p={2}
                _hover={{
                  color: "#e31b60", 
                  transition: "color 0.4s ease",
                }}
              >
                <AiOutlineMail />
              </Link>
            </HStack>
            <Link isExternal href={resume} color={'#fff'} _hover={{ textDecoration: 'none', color: '#e31b60', transition: 'color 0.3s ease' }}>
                <HStack mt={0} className='btn' w={'max-content'} as={motion.div} whileHover={{scale:1.02}} whileTap={{scale:.9}} >
                    <Text fontSize={'2xl'} fontWeight={'semibold'} >
                      Resume
                    </Text>
                    <MdArrowForward className="arrow-icon"/>
                </HStack>
            </Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 4 }} pl={{base: 5, lg: 20}} pr={{base: 5, lg: 10}} py={{base: 5, lg: '3.5rem'}} >
            <VStack justifyContent={'center'} alignItems={'flex-start'}>
                <Text color={'#b9b9b9'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'}>
                  My Background
                </Text>
                <Text color={'#fff'} fontSize={"2xl"} mt={1}>
                  I am a former Mechanical Engineer turned Developer. I have found a passion for both the precision of engineering and the artistry of coding, one that drives me to create cohesive,
                  scalable, and user-friendly applications.  
                </Text>
                <Text color={'#fff'} fontSize={"2xl"} mt={1}>
                  Outside of programming, I love the outdoors. From camping, to playing sports, to just taking a drive with my beautiful dog. My favorite sports team is FC Barcelona. Visca Barca!
                </Text>
            </VStack> 
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 3 }} className="logos"  borderTop={{base: 'none', md: '2px solid #ddd'}} borderRight={{base: 'none', md: '2px solid #ddd'}} p={{base: 5, lg: '3.5rem'}}>
          {/* <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={{base: '6rem', lg:'10rem'}} color={'rgb(33, 36, 46)'} size={{base: 'md', lg: 'lg'}} >
                  Front End
              </Heading>
            </HStack>
            <FrontSkills />
            <FrontSkills />
            <FrontSkills />
          </HStack> */}
          <Text color={'#b9b9b9'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'} mb={2}>
            Tool Stack
          </Text>
          <HStack flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={3}>
            <Skills />
          </HStack>
        </GridItem>
        <GridItem color={'#fff'} colSpan={{ base: 1, lg: 3 }} className="logos" borderTop={{base: 'none', md: '2px solid #ddd'}} p={{base: 5, lg: '3.5rem'}}>
          {/* <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={{base: '6rem', lg:'10rem'}} color={'rgb(33, 36, 46)'} size={{base: 'md', lg: 'lg'}} >
                  Back End
              </Heading>
            </HStack>
            <BackSkills />
            <BackSkills />
            <BackSkills />
          </HStack> */}
          <Text color={'#b9b9b9'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'} mb={1}>
            Education
          </Text>
          <VStack justifyContent={'start'} alignItems={'start'}>
            <HStack w={'full'} alignItems={'start'}>
              <Box w={'7rem'}>
                <Text>2023</Text>
              </Box>
              <Box w={'full'} gap={0}>
                <Text >Software Engineering</Text>
                <Text lineHeight={.7} color={'#b9b9b9'}>General Assembly</Text>
              </Box>
            </HStack>
            <HStack w={'full'} alignItems={'start'}>
              <Box w={'7rem'}>
                <Text>2022</Text>
              </Box>
              <Box w={'full'}>
                <Text>B.S. Mechanical Engineering</Text>
                <Text lineHeight={.7} color={'#b9b9b9'}>CSUN</Text>
              </Box>
            </HStack>
          </VStack>
        </GridItem>
      </AnimatedGrid> 
    </Box>
  );
};

export default About;
