import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import './Projects.css';

const Projects = () => {

  return (
    <Box
      minH="100vh"
      bgColor={"rgb(244, 243, 243)"}
      id="projects"
      as="section"
      py={20}
    >
      <Grid
        templateColumns={{ base: "1fr 5fr", lg: "repeat(6, 1fr)" }}
        minH={'100vh'}
        position="relative"
      >
        <GridItem colSpan={1} h="100%" position={'relative'}>
          {/* <Box
            position={'relative'}
          > */}
            <Heading
              size={{base:'xl', md:'2xl', lg:'3xl'}}
              className="rotate"
              left={['-5rem', '-5rem', '-8rem', '-6rem']}
              top={['3rem', '5rem', '7rem', '10rem']}
              // sx={{
              //   '@media screen and (max-width: 48em)': {
              //     transform: 'none !important',
              //   },
              // }}
            >
              Latest Projects
            </Heading>
          {/* </Box> */}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Projects;
