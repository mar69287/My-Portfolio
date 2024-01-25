import { Box, Heading } from '@chakra-ui/react'
import Background from './Background'
import { motion } from 'framer-motion'

const SplashPage = () => {

  return (
        <Box
            position={'relative'}
            color={'#fff'}
        >
            <Background />
            <Box
                position="absolute" gap={2} zIndex={3} bottom={0} top={0} right={0} left={0} m={'auto'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'}
                h={'max-content'} w={'max-content'}
                as={motion.div}
                variants={boxVariant} animate='visible' initial='hidden'
            >
                <Box p={3} position={'relative'} as={motion.div}
                    initial={{
                        opacity: 1,
                        y:0
                    }}
                    animate={{
                        opacity: 0,
                        y: -100,
                        transition: {
                            delay: 2.5
                        }
                    }}
                >
                    <Heading
                        size={{ base: '2xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
                    >
                        Marco Ruiz
                    </Heading>
                    <Box 
                        pos={'absolute'} left={0} top={0} w={'full'} bg={'white'} h={'2px'}
                        as={motion.div}
                        variants={listVariant}
                    />
                    <Box 
                        pos={'absolute'} right={0} top={0} w={'2px'} bg={'white'} h={'0px'}
                        as={motion.div}
                        initial={{height: 0,
                            transition: {
                                when: "beforeChildren",
                        },}}
                        animate={{height: '100%',
                        transition: {
                            when: "afterChildren",
                            delay: 1,
                        },}} 
                    />
                    <Box 
                        pos={'absolute'} right={0} bottom={0} w={'0px'} bg={'white'} h={'2px'}
                        as={motion.div}
                        initial={{width: 0,
                            transition: {
                                when: "beforeChildren",
                        },}}
                        animate={{width: '100%',
                        transition: {
                            when: "afterChildren",
                            delay: 1.3,
                        },}} 
                    />
                    <Box 
                        pos={'absolute'} left={0} bottom={0} w={'2px'} bg={'white'} h={'0px'}
                        as={motion.div}
                        initial={{height: 0,
                            transition: {
                                when: "beforeChildren",
                        },}}
                        animate={{height: '100%',
                        transition: {
                            when: "afterChildren",
                            delay: 1.6,
                        },}} 
                    />
                </Box>
                <Box
                    w={['10rem']} display={'flex'} justifyContent={'center'} alignItems={'center'}
                    position="absolute" gap={2} zIndex={3} bottom={0} top={0} right={0} left={0} m={'auto'}
                    as={motion.div}
                    initial={{
                        opacity: 0,
                        y:200,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 2.6
                        }
                    }}
                >
                    <Heading
                        size={{ base: '2xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
                        as={motion.heading}
                        animate={{
                            transition: {
                                delay: 3,
                            },
                            x: [-40, 0, 0,],
                            opacity: [1, 1, 0]
                        }}
                    >
                        M
                    </Heading>
                    <Heading
                        size={{ base: '2xl', sm:'3xl', md: '3xl', lg: '4xl' }} textAlign={'center'} fontWeight={'normal'} color={'#fff'} textTransform={'uppercase'}
                        as={motion.heading}
                        animate={{
                            transition: {
                                delay: 3,
                            },
                            x: [40, 0, 0,],
                            opacity: [1, 1, 0]
                        }}
                    >
                        R
                    </Heading>
                </Box>
            </Box>
        </Box>
  )
}

export default SplashPage

const boxVariant = {
    hidden: {
            opacity: 0,
            scale: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.3,
                duration: 1
            },
    },
    visible: {
            opacity: 1,
            scale: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                duration: .3
            },
    },
}
const listVariant = {
    hidden: {
        width: 0,
        transition: {
            when: "beforeChildren",
        }, 
    },
    visible: {
        width: '100%',
        transition: {
            when: "afterChildren",
        },
    },
}