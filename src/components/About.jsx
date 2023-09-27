import { Box, Grid, GridItem, HStack, Image, VStack, Link, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
// import { BsCodeSlash } from 'react-icons/bs'
import { SiChakraui, SiBootstrap, SiExpress, SiNodedotjs, SiPython, SiPostgresql, SiMongodb } from 'react-icons/si'
import { BiLogoReact, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import resume from '../assets/Marco-Software-Resume.pdf'
import materialUI from '../assets/material-ui.png'
import cLogo from '../assets/c++.png'

const About = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  // const hexagonStyles = {
  //   width: "40px",
  //   height: "40px",
  //   backgroundColor: "rgb(1, 188, 193)",
  //   color: "#fff",
  //   fontSize: '1.8rem',
  //   position: "relative",
  //   clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  return (
    <Box minH="100vh" bgColor={"#fff"} id="about" width={{xl: '100%', '2xl': '1400px'}} m='0 auto'>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }} 
        gap={0} 
        borderTop={isLargeScreen ? '2px solid #ddd' : 'none'}
        mt={20}
        mx={20}
      >
        <GridItem colSpan={{ base: 1, lg: 2 }} borderRight={isLargeScreen ? '2px solid #ddd' : 'none'}>
          <VStack pt={10} px={10} pb={5}>
            <Image 
              src={profile}
              w={'320px'}
              h={'350px'}
            />
            <HStack justifyContent={'center'} alignItems={'center'}>
              <Link 
                href="https://github.com/mar69287" 
                isExternal 
                color={'#616161'} 
                fontSize={'1.9rem'}
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
                fontSize={'1.9rem'}
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
                fontSize={'1.9rem'}
                _hover={{
                  color: "#00989D", 
                  transition: "color 0.3s ease", 
                }}
              >
                <AiOutlineMail />
              </Link>
            </HStack>
            <Link 
                href={resume}
                isExternal 
                color={'#fff'} 
                fontSize={'1.5rem'}
                border={'2px solid #e31b6d'}
                bgColor={'#e31b6d'}
                px={'1.4rem'}
                py={'.1rem'}
                _hover={{
                  color: "#fff", 
                  backgroundColor: '#e31b6d',
                  transition: "all .6s ease", 
                }}
              >
                RESUME
              </Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 4 }} pl={20} pr={10} py={'3.5rem'} >
            <VStack justifyContent={'center'} alignItems={'flex-start'}>
                <Text color={'#b9b9b9'} fontSize={"xl"} fontWeight={'medium'}>
                  ABOUT ME
                </Text>
                <Text color={'rgb(33, 36, 46)'} fontSize={"2xl"} mt={3}>
                  I am a Mechanical Engineer turned Developer who loves exploring the balance between curiosity, 
                  practicality, and creativity. These three pillars drive me to discover valuable insights, 
                  rethink problems, and create innovative solutions. 
                </Text>
                <Text color={'rgb(33, 36, 46)'} fontSize={"2xl"} mt={1}>
                Outside of programming, I love the outdoors. From camping, to playing sports, to just taking a drive with my beautiful dog. Favorite sports team is FC Barcelona. Visca Barca!
                </Text>
            </VStack> 
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 6 }} mt={5} borderBottom={'2px solid #ddd'} >
          <HStack>
            <HStack w={'11rem'} justifyContent={'space-between'} gap={4} alignItems={'center'} pr={3}>
              <Heading color={'rgb(33, 36, 46)'} size={'lg'}>
                  Front End
              </Heading>
              {/* <Box style={hexagonStyles}>
                <BsCodeSlash />
              </Box> */}
            </HStack>
            <HStack flex={1} justifyContent={'space-evenly'} borderLeft={'2px solid #ddd'} py={3}>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'rgb(1, 188, 193)'}>
                  <BiLogoReact />
                </Box>
                <Text fontSize={'xl'}>React</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'rgb(232, 208, 70)'}>
                  <BiLogoJavascript />
                </Box>
                <Text fontSize={'xl'}>JavaScript</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'rgb(30, 105, 184)'}>
                  <BiLogoTypescript />
                </Box>
                <Text fontSize={'xl'}>TypeScript</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'1.9rem'} color={'rgb(1, 188, 193)'}>
                  <SiChakraui />
                </Box>
                <Text fontSize={'xl'}>Chakra-UI</Text>
              </VStack>
              <VStack gap={0}>
                <Box boxSize='30px'>
                  <Image src={materialUI} alt='Dan Abramov' />
                </Box>
                <Text fontSize={'xl'}>Material-UI</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'1.9rem'} color={'rgb(99, 23, 241)'}>
                  <SiBootstrap />
                </Box>
                <Text fontSize={'xl'}>Chakra-UI</Text>
              </VStack>
            </HStack>
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 6 }} >
          <HStack>
            <HStack w={'11rem'} justifyContent={'space-between'} gap={4} alignItems={'center'} pr={3}>
              <Heading color={'rgb(33, 36, 46)'} size={'lg'}>
                  Back End
              </Heading>
              {/* <Box style={hexagonStyles}>
                <BsCodeSlash />
              </Box> */}
            </HStack>
            <HStack flex={1} justifyContent={'space-evenly'} borderLeft={'2px solid #ddd'} py={3}>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'black'}>
                  <SiExpress />
                </Box>
                <Text fontSize={'xl'}>Express</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'rgb(49, 125, 56)'}>
                  <SiNodedotjs />
                </Box>
                <Text fontSize={'xl'}>Node</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'2rem'} color={'rgb(30, 105, 184)'}>
                  <SiPython />
                </Box>
                <Text fontSize={'xl'}>Python</Text>
              </VStack>
              <VStack gap={0}>
                <Box boxSize='33px'>
                  <Image src={cLogo} alt='Dan Abramov' />
                </Box>
                <Text fontSize={'xl'}>C++</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'1.9rem'} color={'rgb(30, 105, 184)'}>
                  <SiPostgresql />
                </Box>
                <Text fontSize={'xl'}>PostgreSQL</Text>
              </VStack>
              <VStack gap={0}>
                <Box fontSize={'1.9rem'} color={'rgb(49, 125, 56)'}>
                  <SiMongodb />
                </Box>
                <Text fontSize={'xl'}>MongoDB</Text>
              </VStack>
            </HStack>
          </HStack>
        </GridItem>
        {/* <GridItem colSpan={{ base: 1, lg: 6 }} borderBottom={'2px solid #ddd'}>
          <Heading color={'rgb(33, 36, 46)'} size={'3xl'} mt={20} mb={9} >
              SKILLS
          </Heading>
        </GridItem> */}
        {/* <GridItem colSpan={{ base: 1, lg: 3 }} borderBottom={'2px solid #ddd'} borderRight={'2px solid #ddd'}>
          <VStack>
            <Heading color={'rgb(33, 36, 46)'} size={'xl'} mt={10} mb={9}>
                Front End
            </Heading>
          </VStack>
        </GridItem> 
        <GridItem colSpan={{ base: 1, lg: 3 }} borderBottom={'2px solid #ddd'} px={10} py={5}>
          <VStack w={'100%'} gap={0}>
            <HStack justifyContent={'space-between'} w={'100%'}>
              <Heading color={'rgb(33, 36, 46)'} size={'xl'} mt={10} mb={2}>
                  Back End
              </Heading>
              <Box style={hexagonStyles}>
                <BsCodeSlash />
              </Box>
            </HStack>
            <Text fontSize={'2xl'}>Express</Text>
            <Text fontSize={'2xl'}>Node</Text>
            <Text fontSize={'2xl'}>Python</Text>
            <Text fontSize={'2xl'}>C++</Text>
            <Text fontSize={'2xl'}>MongoDB</Text>
            <Text fontSize={'2xl'}>PostgreSQL</Text>
          </VStack>
        </GridItem>  */}
      </Grid> 
    </Box>
  );
};

export default About;
