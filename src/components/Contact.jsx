import { Box, Button, FormControl, Input, Text, Textarea, VStack, Link, HStack } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineDownload } from 'react-icons/ai'
import resume from '../assets/Marco-Software-Resume.pdf'
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";
import Headers from "./Headers";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

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
        id="contact"
        as="section"
        pt={{base:20, lg: 24}}
        position={'relative'}
        minH={'100vh'}
        width={{xl: '100%', '2xl': '1000px'}} mx={'auto'}
    >
      <Headers left={'contact'} right={'me'} />
      <VStack 
        alignItems={'center'}
        px={5}
        pb={5}
        pt={{base: 5, lg: 0}}
      >
        <Text fontSize={{base: 'lg', lg: 'xl'}} lineHeight={.8}>
          Locating me is a breeze!
        </Text>
        <Box w={{base: '40%'}} border={'1px solid black'} my={6}/>
        <HStack justifyContent={'center'} alignItems={'center'} gap={{base: 7}}>
          <Link 
            href="https://github.com/mar69287" 
            isExternal 
            color={'#fff'} 
            fontSize={{base: '1rem', lg: '1.2rem'}}
            borderRadius={'full'}
            bg={'rgba(97, 97, 97, 0.9)'}
            border={'1px solid RGBA(0, 0, 0, 0.64)'}
            p={2}
            _hover={{
              color: "#e31b60", 
              transition: "color 0.3s ease",
            }}
          >
            <FiGithub />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/marcoruizjr/" 
            isExternal 
            color={'#fff'} 
            fontSize={{base: '1rem', lg: '1.2rem'}}
            borderRadius={'full'}
            bg={'rgba(97, 97, 97, 0.9)'}
            border={'1px solid RGBA(0, 0, 0, 0.64)'}
            p={2}
            _hover={{
              color: "#e31b60", 
              transition: "color 0.3s ease",
            }}
          >
            <FaLinkedinIn />
          </Link>
          <Link 
            href="mailto:marcoa.ruiz97@gmail.com" 
            isExternal 
            color={'#fff'} 
            fontSize={{base: '1rem', lg: '1.2rem'}}
            borderRadius={'full'}
            bg={'rgba(97, 97, 97, 0.9)'}
            border={'1px solid RGBA(0, 0, 0, 0.64)'}
            p={2}
            _hover={{
              color: "#e31b60", 
              transition: "color 0.3s ease",
            }}
          >
            <AiOutlineMail />
          </Link>
          <Link 
            href={resume} 
            isExternal 
            color={'#fff'} 
            fontSize={{base: '1rem', lg: '1.2rem'}}
            borderRadius={'full'}
            bg={'rgba(97, 97, 97, 0.9)'}
            border={'1px solid RGBA(0, 0, 0, 0.64)'}
            p={2}
            _hover={{
              color: "#e31b60", 
              transition: "color 0.3s ease",
            }}
          >
            <AiOutlineDownload />
          </Link>
        </HStack>
        <FormControl
          as="form"
          name="contactForm"
          method="post" 
          action="#"
          width={{base: '100%', md: '700px'}} ref={form} onSubmit={sendEmail}
          mt={{base:5}}
        >
          <VStack  alignItems={'center'} justifyContent={'center'} gap={6}>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} borderRadius={'none'} borderBottom={'2px solid #000'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}  placeholder="Your Name" _placeholder={{ color: '#000' }}/>

              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" _placeholder={{ color: '#000' }} borderRadius={'none'} borderBottom={'2px solid #000'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>

              <Textarea mt={4} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} _placeholder={{ color: '#000' }} borderRadius={'none'} borderBottom={'2px solid #000'} borderTop={'none'} borderRight={'none'} borderLeft={'none'}/>

            <Button
              mt={4}
              bg={'#fff'}
              color={'#000'}
              borderRadius={6}
              _hover={{ bg: "#e31b60", color: 'white', border: "2px solid #000", transition: "all .5s ease", }}
              border={'2px solid #000'}
              px={'1.6rem'}
              py={'1.2rem'}
              type="submit"
              w={'max-content'}
            >
              SUBMIT
            </Button>
          </VStack>
        </FormControl>
      </VStack>
      
    </Box>
  )
}

export default Contact
