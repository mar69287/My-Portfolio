import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import './Projects.css';
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";

const Projects = () => {

  return (
    <Box
      minH="100vh"
      bgColor={"rgb(244, 243, 243)"}
      id="projects"
      as="section"
      py={20}
      px={{base: '5', lg: '0'}}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 5fr", lg: "repeat(6, 1fr)" }}
        minH={'100vh'}
        position="relative"
        width={{xl: '100%', '2xl': '1400px'}} m='0 auto'
      >
        <GridItem colSpan={{base: 2, md: 1}} h="100%" position={'relative'}>
            <Heading
              size={{base:'2xl', sm:'3xl', md:'2xl', lg:'3xl'}}
              className="rotate"
              left={['1rem', '-5rem', '-8rem', '-6rem']}
              top={['0rem', '8rem', '10rem']}
              sx={{
                '@media screen and (max-width: 991px)': {
                  transform: 'none !important',
                  position: 'static',
                  padding: '0',
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: '2.5rem'
                },
              }}
            >
              Latest Projects
            </Heading>
        </GridItem>
        <GridItem h={'100%'} colSpan={5} mr={8}>
            <ProjectsGrid />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Projects;
