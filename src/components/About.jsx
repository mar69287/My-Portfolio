import { Box, Grid, GridItem, HStack, Image, VStack } from "@chakra-ui/react";
import profile from "../assets/portfolio.png"

const About = () => {
  return (
    <Box minH="100vh" bgColor={"#fff"} id="about" width={{xl: '100%', '2xl': '1400px'}} m='2rem auto'>
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 3fr" }} // One column on small screens, two columns on medium and larger screens
        gap={0} // Adjust the gap as needed
        borderTop="2px solid #ddd"
        mt={8}
        mx={4}
      >
        <GridItem>
          <VStack borderRight={'2px solid #ddd'} pt={5}>
            <Image 
              src={profile}
              w={'375px'}
              h={'400px'}
            />
            <HStack justifyContent={'center'} alignItems={'center'}>
              
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
