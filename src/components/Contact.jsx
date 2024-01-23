import { Box, Button, FormControl, Grid, GridItem, Heading, Input, Text, Textarea, VStack, Link, HStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { MdArrowForward } from 'react-icons/md';
import resume from '../assets/Marco-Software-Resume.pdf'
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send('service_7497a0m', 'template_ji08oq7', templateParams, 'LpSuZxGcnUytPiwHX')
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

 
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
        px={{base: 0, lg: 10}}
        color={'#fff'}
        gap={10}
      >
        <GridItem colSpan={1} h="100%">
          <VStack w={'100%'} justifyContent={'center'} alignItems={{base: 'center', md: 'flex-start'}} gap={10}>
            <Heading size={{base: 'xl', lg: '2xl'}} textAlign={{base: 'center', md: 'left'}}>
              Locating me is a breeze, let&rsquo;s get in touch!
            </Heading>
            <Box w={'33%'} border={'1px solid #fff'}></Box>
            <HStack gap={10} justifyContent={{base: 'center', md: 'flex-start'}} alignItems={'center'} w={'100%'}>
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
        <form ref={form} onSubmit={sendEmail}>
          <VStack w={'100%'}  h="100%" alignItems={'flex-end'} justifyContent={'center'}>
            <FormControl>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}  placeholder="Your Name" _placeholder={{ color: '#b9b9b9' }}/>
            </FormControl>

            <FormControl mt={6}>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" _placeholder={{ color: '#b9b9b9' }} borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>
            </FormControl>

            <FormControl mt={8}>
              <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} _placeholder={{ color: '#b9b9b9' }} borderRadius={'none'} borderBottom={'2px solid #fff'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>
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
              type="submit"
            >
              SUBMIT
            </Button>
          </VStack>
        </form>
      </Grid>
    </Box>
  )
}

export default Contact