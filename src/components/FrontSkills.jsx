import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { SiChakraui, SiBootstrap } from 'react-icons/si'
import { BiLogoReact, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import materialUI from '../assets/material-ui.png'

const FrontSkills = () => {
  return (
    <HStack  py={3}  className="logos-slide">
        <VStack gap={0}>
        <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'rgb(1, 188, 193)'}>
            <BiLogoReact />
        </Box>
        <Text fontSize={{base:'lg', lg: 'xl'}}>React</Text>
        </VStack>
        <VStack gap={0}>
        <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'rgb(232, 208, 70)'}>
            <BiLogoJavascript />
        </Box>
        <Text fontSize={{base:'lg', lg: 'xl'}}>JavaScript</Text>
        </VStack>
        <VStack gap={0}>
        <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'rgb(30, 105, 184)'}>
            <BiLogoTypescript />
        </Box>
        <Text fontSize={{base:'lg', lg: 'xl'}}>TypeScript</Text>
        </VStack>
        <VStack gap={0}>
        <Box fontSize={{base:'1.6rem', lg:'1.9rem'}} color={'rgb(1, 188, 193)'}>
            <SiChakraui />
        </Box>
        <Text whiteSpace={'nowrap'} fontSize={{base:'lg', lg: 'xl'}}>Chakra-UI</Text>
        </VStack>
        <VStack gap={0}>
        <Box boxSize={{base: '28px', lg: '30px'}}>
            <Image src={materialUI}/>
        </Box>
        <Text whiteSpace={'nowrap'} fontSize={{base:'lg', lg: 'xl'}}>Material-UI</Text>
        </VStack>
        <VStack gap={0}>
        <Box fontSize={{base:'1.6rem', lg:'1.9rem'}} color={'rgb(99, 23, 241)'}>
            <SiBootstrap />
        </Box>
        <Text whiteSpace={'nowrap'} fontSize={{base:'lg', lg: 'xl'}}>Bootstrap</Text>
        </VStack>
    </HStack>
  )
}

export default FrontSkills