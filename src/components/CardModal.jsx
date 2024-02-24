import { Box, VStack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Link, Stack, Heading, HStack } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowForward } from 'react-icons/md';
import { FiGithub } from "react-icons/fi";

const CardModal = ({ isOpen, setIsOpen, title, description, tools, img, github, link }) => {
  return (
    <Modal isOpen={isOpen} size={{base:'full', md: 'xl'}} onClose={()=> setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent bg={'rgb(10, 10, 10)'} color={'#fff'} border={'1px solid rgba(255, 255, 255, .2)'}>
          <ModalCloseButton onClick={() => setIsOpen(false)} />
          <ModalHeader
            pb={1}
          >
            {title === "Eventiva (In Progress)" ? (  
                <Heading fontSize={{base: '3xl', sm: '4xl'}} fontWeight={'semibold'}>Eventiva</Heading>
            ) : (
                <Link
                    fontWeight={'semibold'} w={'max-content'} display={'flex'} alignItems={'center'} _hover={{color: '#e31b60', transition: 'all 0.4s ease'}}
                    href={link}
                    target="_blank" rel="noopener noreferrer"
                    fontSize={{base: '3xl', sm: '4xl'}} gap={2}
                >
                    {title} <FiArrowUpRight/>
                </Link>
            )}
            <Box w={{base:'60%', sm: '40%'}} my={5}  border={'1px solid white'}/>
          </ModalHeader>
          <ModalBody pt={0} pb={10}>
            <Stack direction={['column' ]} spacing='24px'>
                <Text fontSize={{base: 'sm', sm: 'md'}}>{description}</Text>
                <VStack justifyContent={'center'} alignItems={'start'}>
                    <Box
                        display={'flex'} flexWrap={'wrap'} justifyContent={'start'} gap={2}
                    >
                        {tools.map((tool, index) => (
                            <Box
                                key={index}
                                borderRadius={'full'} py={2} px={3} bg={'rgba(44, 44, 44, .9)'}
                                fontSize={{base: 'xs', sm: 'sm'}}
                                color={'white'} border={'1px solid rgba(255, 255, 255, .1)'}
                            >
                                {tool}
                            </Box>
                        ))}
                    </Box>

                    <HStack gap={2}>
            <Link isExternal bgGradient='linear(to-br, #FF0080, #7928CA, #FF0080)' p={{base: '1px', md: '1.4px'}} borderRadius={"full"} w={'max-content'}  href={github} fontSize={{base: 'md', md: 'lg'}}  color={'#fff'} _hover={{ textDecoration: 'none', bgGradient: 'linear(to-br, #7928CA, #FF0080, #7928CA)', transition: 'all 4s ease' }}>
                <HStack mt={0} className='btn' w={'full'} bg={'black'} p={3} borderRadius={'full'} >
                    <Text fontSize={{base: 'xs', md: 'sm'}}  fontWeight={'semibold'} >
                        More Details
                    </Text>
                    <FiGithub />
                </HStack>
            </Link>
            {title !== 'Eventiva (In Progress)' &&
              <Link isExternal bgGradient='linear(to-br, #FF0080, #7928CA, #FF0080)' p={{base: '1px', md: '1.4px'}} borderRadius={"full"} w={'max-content'} href={link} fontSize={{base: 'md', md: 'lg'}}  color={'#fff'} _hover={{ textDecoration: 'none', bgGradient: 'linear(to-br, #7928CA, #FF0080, #7928CA)', transition: 'color 0.3s ease' }}>
                  <HStack mt={0} className='btn' w={'full'} bg={'black'} p={3} borderRadius={'full'}>
                      <Text fontSize={{base: 'xs', md: 'sm'}}  fontWeight={'semibold'} >
                          Live
                      </Text>
                      <MdArrowForward className="arrow-icon"/>
                  </HStack>
              </Link>
            }
          </HStack>
                </VStack>
                <Box
                    h={{base: '200px', sm: '275px', md: '250px'}} 
                    border={'1px solid #ddd'}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    borderRadius={6}
                />
            </Stack>
          </ModalBody>

        </ModalContent>
      </Modal>
  )
}

export default CardModal