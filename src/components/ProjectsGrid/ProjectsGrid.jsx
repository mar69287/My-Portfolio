import { Box, Grid, GridItem, Heading, HStack, Link, Text, VStack } from '@chakra-ui/layout'
import { MdArrowForward } from 'react-icons/md';
import dev from '../../assets/dev-port.png'
import tienda from '../../assets/tienda.png'
import little from '../../assets/little.png'
import insight from '../../assets/insight.png'
import { Image } from '@chakra-ui/image';

const ProjectsGrid = () => {

  return (
    <>
        <Grid
            templateColumns={{ base: "repeat(3, 1fr)" }}
            gap={10}
            rowGap={{base: 5, md: 20}}
            placeItems={'center'}
        >
            <GridItem colSpan={{base: 3, md:1}} >
                <VStack justifyContent={'center'} alignItems={'flex-start'} gap={{base: 5, md: 10}}>
                    <Heading textAlign={'left'} color={'rgb(33, 36, 46)'} size={'2xl'}>
                        DevConnect
                    </Heading>
                    <Box w={'33%'} border={'1px solid rgb(33, 36, 46)'}></Box>
                    <Box>
                        <Text fontSize={'lg'}>
                            Struggling to break into tech?
                        </Text>
                        <Text mt={2} mb={5} fontSize={'lg'}>
                            A social platform tailored for developers seeking meaningful connections and portfolio enhancement.
                        </Text>
                        <Link isExternal href='https://github.com/mar69287/devConnect' _hover={{ textDecoration: 'none' }}>
                            <HStack mt={1} className='btn'>
                                <Text fontSize={'lg'} fontWeight={'semibold'}>More Details</Text>
                                <MdArrowForward className="arrow-icon"/>
                            </HStack>
                        </Link>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem mb={{base: 10, md: 0}} colSpan={{base: 3, md:2}} h={{base:'15rem', sm:'17rem', md: '20rem', lg: '30rem'}} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
                    <Image 
                        src={dev}
                        objectFit={'cover'}
                        h={'100%'} w={{base:'100%', sm: '70%', md:'99%'}}
                    />
                    <VStack
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        align="center"
                        opacity='0'
                        transition="opacity 0.3s ease"
                        zIndex={3}
                        _hover={{ opacity: '1' }} 
                        color={'black'}
                        height={'100%'}
                        bgColor={'rgb(244, 243, 243)'}
                        position={'absolute'}
                        w={{base:'100%', sm: '70%', md:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={10}
                    >
                        <Text color={'#e31b60'} fontSize={{base: 'xl', md: '2xl'}} textAlign={'center'}>MERN / Chat Engine / Chakra-UI</Text>
                        <Link 
                            isExternal
                            href='https://devconnect-social-d5ad076571e6.herokuapp.com/' 
                            _hover={{ textDecoration: 'none',  color: "#fff", backgroundColor: '#e31b6d', transition: "all .6s ease",}}
                            color={'rgb(33, 36, 46)'}
                            border={'2px solid #e31b6d'}
                            px={'1.4rem'}
                            py={'.1rem'}
                            fontSize={'xl'} 
                        >
                            Visit
                        </Link>
                    </VStack>
            </GridItem>
            <GridItem colSpan={{base: 3, md:1}}>
                <VStack justifyContent={'center'} alignItems={'flex-start'} gap={{base: 5, md: 10}}>
                    <Heading textAlign={'left'} color={'rgb(33, 36, 46)'} size={'2xl'}>
                        Tienda Maya
                    </Heading>
                    <Box w={'33%'} border={'1px solid rgb(33, 36, 46)'}></Box>
                    <Box>
                        <Text mb={5} fontSize={'lg'}>
                            Where the essence of my Guatemalan culture meets contemporary flair in an online marketplace curated for modern tastes and trends.
                        </Text>
                        <Link isExternal href='https://github.com/mar69287/tienda-maya' _hover={{ textDecoration: 'none' }}>
                            <HStack mt={1} className='btn' >
                                <Text fontSize={'lg'} fontWeight={'semibold'}>More Details</Text>
                                <MdArrowForward className="arrow-icon"/>
                            </HStack>
                        </Link>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem mb={{base: 10, md: 0}} colSpan={{base: 3, md:2}} h={{base:'15rem', sm:'17rem', md: '20rem', lg: '30rem'}} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
                    <Image 
                        src={tienda}
                        objectFit={'cover'}
                        h={'100%'} w={{base:'100%', sm: '70%', md:'99%'}}
                    />
                    <VStack
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        align="center"
                        opacity='0'
                        transition="opacity 0.3s ease"
                        zIndex={3}
                        _hover={{ opacity: '1' }} 
                        color={'black'}
                        height={'100%'}
                        bgColor={'rgb(244, 243, 243)'}
                        position={'absolute'}
                        w={{base:'100%', sm: '70%', md:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={10}
                    >
                        <Text color={'#e31b60'} fontSize={{base: 'xl', md: '2xl'}} textAlign={'center'}>MERN / Stripe API / Chakra-UI</Text>
                        <Link 
                            isExternal
                            href='https://tienda-maya-437e34b34987.herokuapp.com/' 
                            _hover={{ textDecoration: 'none',  color: "#fff", backgroundColor: '#e31b6d', transition: "all .6s ease",}}
                            color={'rgb(33, 36, 46)'}
                            border={'2px solid #e31b6d'}
                            px={'1.4rem'}
                            py={'.1rem'}
                            fontSize={'xl'}
                            
                        >
                            Visit
                        </Link>
                    </VStack>
            </GridItem>
            <GridItem colSpan={{base: 3, md:1}}>
                <VStack justifyContent={'center'} alignItems={'flex-start'} gap={{base: 5, md: 10}}>
                    <Heading textAlign={'left'} color={'rgb(33, 36, 46)'} size={'2xl'}>
                        InSight
                    </Heading>
                    <Box w={'33%'} border={'1px solid rgb(33, 36, 46)'}></Box>
                    <Box>
                        <Text mb={5} fontSize={'lg'}>
                            Efficiently manage business metrics across multiple companies with this. Track sales, revenue, orders, inventory, and employee data seamlessly through a user-friendly interface, ensuring optimal performance.
                        </Text>
                        <Link isExternal href='https://github.com/mar69287/InSight' _hover={{ textDecoration: 'none' }}>
                            <HStack mt={1} className='btn' >
                                <Text fontSize={'lg'} fontWeight={'semibold'}>More Details</Text>
                                <MdArrowForward className="arrow-icon"/>
                            </HStack>
                        </Link>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem mb={{base: 10, md: 0}} colSpan={{base: 3, md:2}} h={{base:'15rem', sm:'17rem', md: '20rem', lg: '30rem'}} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
                    <Image 
                        src={insight}
                        objectFit={'fill'}
                        h={'100%'} w={{base:'100%', sm: '70%', md:'99%'}}
                    />
                    <VStack
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        align="center"
                        opacity='0'
                        transition="opacity 0.3s ease"
                        zIndex={3}
                        _hover={{ opacity: '1' }} 
                        color={'black'}
                        height={'100%'}
                        bgColor={'rgb(244, 243, 243)'}
                        position={'absolute'}
                        w={{base:'100%', sm: '70%', md:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={10}
                    >
                        <Text color={'#e31b60'} fontSize={{base: 'xl', md: '2xl'}} textAlign={'center'}>MERN / Stripe API / Nivo / Full Calendar</Text>
                        <Link 
                            isExternal
                            href='https://insight-official.herokuapp.com/' 
                            _hover={{ textDecoration: 'none',  color: "#fff", backgroundColor: '#e31b6d', transition: "all .6s ease",}}
                            color={'rgb(33, 36, 46)'}
                            border={'2px solid #e31b6d'}
                            px={'1.4rem'}
                            py={'.1rem'}
                            fontSize={'xl'}
                            
                        >
                            Visit
                        </Link>
                    </VStack>
                {/* </Link> */}
            </GridItem>
            <GridItem colSpan={{base: 3, md:1}}>
                <VStack justifyContent={'center'} alignItems={'flex-start'} gap={{base: 5, md: 10}}>
                    <Heading textAlign={'left'} color={'rgb(33, 36, 46)'} size={'2xl'}>
                        Little Learners
                    </Heading>
                    <Box w={'33%'} border={'1px solid rgb(33, 36, 46)'}></Box>
                    <Box>
                        <Text mb={5} fontSize={'lg'}>
                            A web-based student management app for preschools. Enhancing communication between teachers and guardians while offering valuable data insights for student success.
                        </Text>
                        <Link isExternal href='https://github.com/mar69287/little-learners' _hover={{ textDecoration: 'none' }}>
                            <HStack mt={1} className='btn' >
                                <Text fontSize={'lg'} fontWeight={'semibold'}>More Details</Text>
                                <MdArrowForward className="arrow-icon"/>
                            </HStack>
                        </Link>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem mb={{base: 10, md: 0}} colSpan={{base: 3, md:2}} h={{base:'15rem', sm:'17rem', md: '20rem', lg: '30rem'}} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
                    <Image 
                        src={little}
                        objectFit={'fill'}
                        h={'100%'} w={{base:'100%', sm: '70%', md:'99%'}}
                    />
                    <VStack
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        align="center"
                        opacity='0'
                        transition="opacity 0.3s ease"
                        zIndex={3}
                        _hover={{ opacity: '1' }} 
                        color={'black'}
                        height={'100%'}
                        bgColor={'rgb(244, 243, 243)'}
                        position={'absolute'}
                        w={{base:'100%', sm: '70%', md:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={10}
                    >
                        <Text color={'#e31b60'} fontSize={{base: 'xl', md: '2xl'}} textAlign={'center'}>Python / Django / PostgreSQL</Text>
                        <Link 
                            isExternal
                            href='https://littlelearners.herokuapp.com/' 
                            _hover={{ textDecoration: 'none',  color: "#fff", backgroundColor: '#e31b6d', transition: "all .6s ease",}}
                            color={'rgb(33, 36, 46)'}
                            border={'2px solid #e31b6d'}
                            px={'1.4rem'}
                            py={'.1rem'}
                            fontSize={'xl'}
                            
                        >
                            Visit
                        </Link>
                    </VStack>
                {/* </Link> */}
            </GridItem>
        </Grid>
    </>
  )
}

export default ProjectsGrid