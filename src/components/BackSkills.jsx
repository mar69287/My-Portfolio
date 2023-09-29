import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { SiExpress, SiNodedotjs, SiPython, SiPostgresql, SiMongodb } from 'react-icons/si'
import cLogo from '../assets/c++.png'

const BackSkills = () => {
  return (
    <HStack  py={3}  className="logos-slide">
        <VStack gap={0}>
          <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'black'}>
            <SiExpress />
          </Box>
          <Text fontSize={{base:'lg', lg: 'xl'}}>Express</Text>
          </VStack>
          <VStack gap={0}>
            <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'rgb(49, 125, 56)'}>
              <SiNodedotjs />
            </Box>
            <Text fontSize={{base:'lg', lg: 'xl'}}>Node</Text>
          </VStack>
          <VStack gap={0}>
            <Box fontSize={{base:'1.8rem', lg:'2rem'}} color={'rgb(30, 105, 184)'}>
              <SiPython />
            </Box>
            <Text fontSize={{base:'md', lg: 'xl'}}>Python</Text>
          </VStack>
          <VStack gap={0}>
            <Box boxSize={{base: '30px', lg: '33px'}}>
              <Image src={cLogo}/>
            </Box>
            <Text fontSize={{base:'lg', lg: 'xl'}}>C++</Text>
          </VStack>
          <VStack gap={0}>
            <Box fontSize={'1.9rem'} color={'rgb(30, 105, 184)'}>
              <SiPostgresql />
            </Box>
            <Text fontSize={{base:'lg', lg: 'xl'}}>PostgreSQL</Text>
          </VStack>
          <VStack gap={0}>
            <Box fontSize={{base:'1.9rem', lg:'2.1rem'}} color={'rgb(49, 125, 56)'}>
              <SiMongodb />
            </Box>
            <Text fontSize={{base:'lg', lg: 'xl'}}>MongoDB</Text>
        </VStack>
    </HStack>
  )
}

export default BackSkills