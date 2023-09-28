import { Box, Button, FormControl, Grid, GridItem, Heading, Input, Text, Textarea, VStack, Link, HStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { MdArrowForward } from 'react-icons/md';
import resume from '../assets/Marco-Software-Resume.pdf'

const Contact = () => {
  return (
    <Box
        bgColor={"#252934"}
        id="contact"
        as="section"
        py={20}
        px={{base: '5', lg: '0'}}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        width={{xl: '100%', '2xl': '1400px'}} m='0 auto'
        px={10}
        color={'#fff'}
        gap={10}
      >
        <GridItem colSpan={1} h="100%">
          <VStack w={'100%'} justifyContent={'center'} alignItems={'flex-start'} gap={10}>
            <Heading size={'2xl'}>
              Locating me is a breeze, let&rsquo;s get in touch!
            </Heading>
            <Box w={'33%'} border={'1px solid #fff'}></Box>
            <HStack gap={10} alignItems={'center'} w={'100%'}>
              <Link 
                href="https://github.com/mar69287" 
                isExternal 
                // color={'#616161'} 
                fontSize={'2.2rem'}
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
                // color={'#616161'} 
                fontSize={'2.2rem'}
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
                // color={'#616161'} 
                fontSize={'2.2rem'}
                _hover={{
                  color: "#00989D", 
                  transition: "color 0.3s ease", 
                }}
              >
                <AiOutlineMail />
              </Link>
            </HStack>
          </VStack>
            <Link isExternal href={resume} _hover={{ textDecoration: 'none' }}>
                <HStack mt={6} className='btn'>
                    <Text fontSize={'2xl'} fontWeight={'semibold'}>Resume</Text>
                    <MdArrowForward className="arrow-icon"/>
                </HStack>
            </Link>
        </GridItem>
        <VStack  h="100%" alignItems={'flex-end'} justifyContent={'center'}>

          <FormControl>
            <Input type="text" borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}  placeholder="Your Name" _placeholder={{ color: '#b9b9b9' }}/>
          </FormControl>

          <FormControl mt={6}>
            <Input type="email" placeholder="Your Email" _placeholder={{ color: '#b9b9b9' }} borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>
          </FormControl>

          <FormControl mt={8}>
            <Textarea placeholder="Message" _placeholder={{ color: '#b9b9b9' }} borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>
          </FormControl>

          <Button
            mt={4}
            bg={'#252934'}
            color={'#fff'}
            borderRadius={0}
            _hover={{ bg: "#00989D", border: "2px solid #00989D", transition: "all .5s ease", }}
            border={'2px solid #fff'}
            px={'1.6rem'}
            py={'1.2rem'}
          >
            SUBMIT
          </Button>
        </VStack>
      </Grid>
    </Box>
  )
}

export default Contact