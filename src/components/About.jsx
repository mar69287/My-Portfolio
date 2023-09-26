import { Box, Grid, GridItem, HStack, Image, VStack, Link } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const About = () => {
  return (
    <Box minH="100vh" bgColor={"#fff"} id="about" width={{xl: '100%', '2xl': '1400px'}} m='5rem auto'>
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 3fr" }} // One column on small screens, two columns on medium and larger screens
        gap={0} // Adjust the gap as needed
        borderTop="2px solid #ddd"
        mt={8}
        mx={20}
      >
        <GridItem>
          <VStack borderRight={'2px solid #ddd'} pt={5}>
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
                  color: "#00989D", // Change color on hover
                  transition: "color 0.3s ease", // Add a transition effect
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
                  color: "#00989D", // Change color on hover
                  transition: "color 0.3s ease", // Add a transition effect
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
                  color: "#00989D", // Change color on hover
                  transition: "color 0.3s ease", // Add a transition effect
                }}
              >
                <AiOutlineMail />
              </Link>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem>

        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
