import { Box, Grid, HStack, Heading, Hide, Link, Show, Text, VStack } from "@chakra-ui/react";
import Headers from "../Headers";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa6";
import dev from '../../assets/dev.png'
import bark from '../../assets/bark.png'
import tienda from '../../assets/tienda.png'
import eventiva from '../../assets/eventiva.png'
import { useState } from "react";
import CardModal from "../CardModal";
import { MdArrowForward } from 'react-icons/md';

const Projects = () => {

  return (
    <Box
      minH="100vh"
      bgColor={"#000"}
      py={{base:20, lg: 24}}
      id="projects"
      as="section"
    >
      <Headers left={'select'} right={'work'} />
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: {delay: .7} }}
      >
        <VStack
          alignItems={'center'}
          px={2}
          pb={5}
          pt={{base: 5, lg: 0}}
        >
          <Text fontSize={{base: 'lg', lg: 'xl'}} lineHeight={1.5} textAlign={'center'} color={'#fff'}>
            Building projects involves hands-on learning, rigorous testing, and bringing concepts to life through practical construction.
          </Text>
          <Box w={{base: '60%', sm: '40%'}} bgGradient='linear(to-r, black, #e31b60, #04c2c9, #e31b60, black)' h={'1px'} my={6}/>
        </VStack>
        <Grid
           width={{base: '100%', '2xl': '1400px'}} m='0 auto'
           templateColumns={{ base: "1fr", md: "1fr 1fr"}}
           gap={{base: 5, md: 3}}
           px={2}
        >
          <Card
            title="DevConnect"
            description="A social platform tailored for developers seeking meaningful connections and portfolio enhancement."
            tools={['MERN', 'Chat Engine', 'Chakra-UI', 'AWS' ]}
            imgSrc={dev}
            github={'https://github.com/mar69287/devConnect'}
            link={'https://devconnect-social-d5ad076571e6.herokuapp.com/'}
          />
          <Card
            title="Tienda Maya"
            description="Where the essence of my Guatemalan culture meets contemporary flair in an online marketplace curated for modern tastes and trends."
            tools={['MERN', 'Stripe API', 'Chakra-UI' ]}
            imgSrc={tienda}
            github={'https://github.com/mar69287/tienda-maya'}
            link={'https://tienda-maya-437e34b34987.herokuapp.com/'}
          />
          <Card
            title="BARK Rescue"
            description="Directed a cross functional team of five developers to redesign a Non-profit website"
            tools={['Vite', 'Node.js', 'React', 'Tailwind' ]}
            imgSrc={bark}
            github={'https://github.com/jadewang425/winter-hackathon-23'}
            link={'https://barkanimalrescue.netlify.app/'}
          />
          <Card
            title="Eventiva"
            description="Say goodbye to long email threads and group texts. Eventiva is your one stop shop to plan a group event everyone will love."
            tools={['Vite', 'Python', 'React', 'Tailwind', 'AppWrite']}
            imgSrc={eventiva}
            github={'https://github.com/mar69287/Eventiva'}
            link={''}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;

const Card = ({ imgSrc, title, description, tools, github, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box as={motion.div} whileHover={"hover"} 
      w={'full'} h={{base: '200px', sm: '275px', md: '250px', lg: '350px'}}  overflow={'hidden'} pos={'relative'} borderRadius={'md'} border={'1px solid rgba(255, 255, 255, .4)'} color={'white'}
    >
      <Show above="lg">
        <Box
          h={'full'} p={6} display={'flex'} flexDirection={'column'} justifyContent={'start'} bg={'rgb(10, 10, 10)'}
          fontSize={{base: 'xl', md: '2xl', lg: '3xl'}}
        >
          {title === 'Eventiva' ? (
            <Heading fontSize={{base: 'xl', md: '2xl', lg: '3xl'}} fontWeight={'semibold'}>{title}</Heading>
          ) : (
              <Link
                fontWeight={'semibold'} w={'max-content'} display={'flex'} alignItems={'center'} _hover={{color: '#e31b60', transition: 'all 0.4s ease'}}
                href={link}
                target="_blank" rel="noopener noreferrer"
              >
                {title} <FiArrowUpRight/>
              </Link>
          )}
          <Box w={{base:'33%', sm: '20%'}} my={5} border={'1px solid white'} />
          <Text fontSize={{base: 'sm', md: 'md'}} fontWeight={'light'} pb={'20px'}>{description}</Text>
          <Box
            display={'flex'} flexWrap={'wrap'} justifyContent={'start'} gap={2} fontSize={'sm'} mt={2} mb={2}
          >
            {tools.map((tool, index) => (
              <Box
                key={index}
                borderRadius={'full'} py={2} px={3} bg={'rgba(44, 44, 44, .9)'}
                fontSize={{base: 'xs', md: 'sm'}}
                border={'1px solid rgba(255, 255, 255, .1)'}
              >
                {tool}
              </Box>
            ))}
          </Box>
          {title === 'Eventiva' &&
            <Box
              borderRadius={'full'} py={2} px={3} bg={'rgb(50,50,50)'} display={'flex'} alignItems={'center'} fontSize={{base: 'xs', md: 'sm'}}
              fontWeight={'bold'} w={'max-content'} mb={2} border={'1px solid rgba(255, 255, 255, .1)'}
            >
              Still in Progress<FaExclamation/>
            </Box>
          }
          <Link isExternal href={github} fontSize={{base: 'md', md: 'lg'}}  color={'#fff'} _hover={{ textDecoration: 'none', color: '#e31b60', transition: 'color 0.3s ease' }}>
              <HStack mt={0} className='btn' w={'max-content'} as={motion.div} whileHover={{scale:1.02}} whileTap={{scale:.9}} >
                  <Text fontSize={{base: 'md', md: 'lg'}}  fontWeight={'semibold'} >
                      More Details
                  </Text>
                  <MdArrowForward className="arrow-icon"/>
              </HStack>
          </Link>
        </Box>
        <Box
          as={motion.div}
          variants={{
            hover: {
              top: "100%",
              right: "100%",
            },
          }}
          pos={'absolute'} inset={'0'} bg={'gray.400'} zIndex={10}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <VStack
            w={'full'}
            position={'absolute'}
            bottom={0} p={2}
            zIndex={3} color={'black'}
            justifyContent={'center'}
            alignItems={'start'}
            gap={1}
            fontSize={{base: 'md', lg: 'lg'}}
            as={motion.div}
            variants={{
              hover: {
                opacity: 0
              },
            }}
          >
            <Text bg={'rgba(97, 97, 97, 0.9)'} color={'white'} p={2} borderRadius={6}>
              {title}
            </Text>
          </VStack>
        </Box>
      </Show>
      <Hide above="lg">
        <Box
          pos={'absolute'} inset={'0'} bg={'gray.400'} zIndex={10}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setIsOpen(true)}
          cursor={'pointer'}
        >
          <VStack
            w={'full'}
            position={'absolute'}
            bottom={0} p={2}
            zIndex={3} color={'black'}
            justifyContent={'center'}
            alignItems={'start'}
            gap={1}
            fontSize={{base: 'md', lg: 'lg'}}
          >
            <Text bg={'rgba(97, 97, 97, 0.9)'} color={'white'} p={2} borderRadius={6}>
              {title}
            </Text>
          </VStack>
          {isOpen && <CardModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} description={description} tools={tools} img={imgSrc} github={github} link={link} />}
        </Box>
      </Hide>
    </Box>
  );
};

