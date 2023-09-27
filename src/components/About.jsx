import { Box, Grid, GridItem, HStack, Image, VStack, Link, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import resume from '../assets/Marco-Software-Resume.pdf'
import './About.css'
import FrontSkills from "./FrontSkills";
import BackSkills from "./BackSkills";

const About = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Box bgColor={"#fff"} id="about" width={{xl: '100%', '2xl': '1400px'}} m='0 auto'>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }} 
        gap={0} 
        borderTop={isLargeScreen ? '2px solid #ddd' : 'none'}
        mt={20}
        mx={20}
        mb={20}
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
        <GridItem colSpan={{ base: 1, lg: 6 }} mt={5} borderBottom={'2px solid #ddd'} className="logos">
          <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={'10rem'} color={'rgb(33, 36, 46)'} size={'lg'} >
                  Front End
              </Heading>
            </HStack>
            <FrontSkills />
            <FrontSkills />
            <FrontSkills />
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 6 }}  className="logos">
          <HStack h={'100%'}>
            <HStack whiteSpace={'nowrap'} h={'100%'} backgroundColor={'white'} position={"relative"} zIndex={4} justifyContent={'space-between'} alignItems={'center'} pr={3} borderRight={'2px solid #ddd'}>
              <Heading w={'10rem'} color={'rgb(33, 36, 46)'} size={'lg'} >
                  Back End
              </Heading>
            </HStack>
            <BackSkills />
            <BackSkills />
            <BackSkills />
          </HStack>
        </GridItem>
      </Grid> 
    </Box>
  );
};

export default About;
