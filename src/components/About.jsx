import { Box, Grid, GridItem, HStack, Image, VStack, Link, Text } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiOutlineMail, AiOutlineDownload } from 'react-icons/ai'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import resume from '../assets/Marco-Software-Resume.pdf'
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion'
import Headers from "./Headers";
import Skills from "./Skills";
import HoverTag from "./HoverTag";

const AnimatedGrid = motion(Grid);

const About = () => {

  return (
    <Box  
      id="About" minH={'100vh'} pos={'relative'} zIndex={1} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'center'} pt={{base:20, lg: 24}}
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
            <HStack justifyContent={'center'} alignItems={'center'} gap={{base: 4, md: 7}} mt={3}>
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
                as={motion.a} whileHover="hover" cursor={'pointer'}
                display={'flex'} justifyContent={'center'} alignItems={'center'}
              >
                <HoverTag name={'Github'} />
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
                as={motion.a} whileHover="hover" cursor={'pointer'}
                display={'flex'} justifyContent={'center'} alignItems={'center'}
              >
                <HoverTag name={'LinkedIn'} />
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
                as={motion.a} whileHover="hover" cursor={'pointer'}
                display={'flex'} justifyContent={'center'} alignItems={'center'}
              >
                <HoverTag name={'Email'} />
                <AiOutlineMail />
              </Link>
              <Link
              href={resume}
              isExternal
              color={'#fff'}
              fontSize={{base: '1rem', lg: '1.2rem'}}
              borderRadius={'full'}
              bg={'rgba(97, 97, 97, 0.9)'}
              border={'1px solid rgba(255, 255, 255, .1)'}
              p={2}
              py={1}
              _hover={{
                color: "#e31b60",
                transition: "color 0.3s ease",
              }}
              pos={'relative'}
              as={motion.a} whileHover="hover" cursor={'pointer'}
              display={'flex'} justifyContent={'center'} alignItems={'center'} gap={1}
            >
              Resume
              <AiOutlineDownload />
            </Link>
            </HStack>
            {/* <Link isExternal href={resume} color={'#fff'} _hover={{ textDecoration: 'none', color: '#e31b60', transition: 'color 0.3s ease' }}>
                <HStack mt={0} className='btn' w={'max-content'} as={motion.div} whileHover={{scale:1.02}} whileTap={{scale:.9}} >
                    <Text fontSize={'2xl'} fontWeight={'semibold'} >
                      Resume
                    </Text>
                    <MdArrowForward className="arrow-icon"/>
                </HStack>
            </Link> */}
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 4 }} pl={{base: 5, lg: 20}} pr={{base: 5, lg: 10}} py={{base: 5, lg: '3.5rem'}} >
            <VStack justifyContent={'center'} alignItems={'flex-start'}>
                <Text color={'#fff'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'}>
                  My Background
                </Text>
                <Text color={'#b9b9b9'} fontSize={"xl"} mt={1}>
                  I am a first-generation college graduate with a degree in <span style={{color: '#fff'}}>Mechanical Engineering</span>. My academic journey sparked an interest in coding, prompting me to direct my determination towards
                  a career in <span style={{color: '#fff'}}>web development</span>. I&apos;ve since explored a diverse tech stack and successfully applied it in creating projects that I take great pride in. Through this journey, I&apos;ve demonstrated 
                  the ability to <span style={{color: '#fff'}}>swiftly acquire</span> and <span style={{color: '#fff'}}>apply new skills</span>, which has instilled in me a sense of accomplishment and a thirst for <span style={{color: '#fff'}}>continuous learning</span>. Therefore, I&apos;m eager to keep growing and contribute
                  to more fulfilling projects whose <span style={{color: '#fff'}}>solutions make a lasting impact</span>. 
                </Text>
                <Text color={'#b9b9b9'} fontSize={"xl"} mt={1}>
                  Aside from programming, I love the outdoors–from camping in Sequoia or snowboarding in Big Bear with friends to taking a drive with my beautiful dog. When I’m not outside, I’m watching my favorite sports 
                  team FC Barcelona. Visca Barca!
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
          <Text color={'#fff'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'} mb={2}>
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
          <Text color={'#fff'} fontSize={"xl"} fontWeight={'medium'} textTransform={'uppercase'} mb={1}>
            Education
          </Text>
          <VStack justifyContent={'start'} alignItems={'start'}>
            <HStack w={'full'} alignItems={'start'}>
              <Box w={'7rem'}>
                <Text color={'#b9b9b9'}>2023</Text>
              </Box>
              <Box w={'full'} gap={0}>
                <Text >Software Engineering</Text>
                <Text lineHeight={.7} color={'#b9b9b9'}>General Assembly</Text>
              </Box>
            </HStack>
            <HStack w={'full'} alignItems={'start'}>
              <Box w={'7rem'}>
                <Text color={'#b9b9b9'}>2022</Text>
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
