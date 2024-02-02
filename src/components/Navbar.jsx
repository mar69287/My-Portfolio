import { HStack, Box, Flex, useBreakpointValue, shouldForwardProp, chakra } from '@chakra-ui/react';
import './Navbar.css';
import { AnimatePresence, motion, isValidMotionProp, useScroll, useMotionValueEvent } from 'framer-motion';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdContactPhone, MdOutlineGridView } from "react-icons/md";
import { Link } from 'react-scroll';
import { useState } from 'react';

const ChakraBox = chakra(motion.div, {shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),});

const Navbar = ({ setSelected, selected, mode, setMode }) => {
  const isSmallScreen = useBreakpointValue({ base: true, 'md': false });
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
                setHidden(true)
        } else {
                setHidden(false)
        }
  });

  const sectionHeaders = [
        {
                'name': 'Home',
                'icon': AiOutlineHome
        },
        {
                'name': 'Projects',
                'icon': MdOutlineGridView
        },
        {
                'name': 'About',
                'icon': IoPersonOutline
        },
        {
                'name': 'Contact',
                'icon': MdContactPhone
        }
  ]
  
  return (
            <ChakraBox 
                className='nav' color={'#b9b9b9'} h={{base:'3.2rem', lg: '4rem'}} fontSize={{base: 'md', md: 'lg'}} justifyContent={'space-between'} gap={2} 
                bgColor={'rgba(0, 0, 0, 0.2)'} w={'full'} zIndex={20} position={'fixed'} left={0} right={0} top={'0'} p={".7rem 1.7rem"}  backdropBlur={'15px'}
                as={motion.div} display={'flex'} alignItems={'center'} 
                variants={{
                        visible: {y: 0},
                        hidden: {y: "-100%"}
                }}

                animate={hidden ? 'hidden' : 'visible'} transition={{duration: .4, ease: "easeInOut"}}
            >

                <Box
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: {duration: .5, delay: .5} }}
                        fontSize={{ base: 'lg', md: 'xl', 'xl': '2xl' }}
                        color={'#f5f5f5'} fontFamily={'Libre Baskerville, serif'}
                >
                        Marco Ruiz
                </Box>
                {mode && <Tabs selected={selected} setSelected={setSelected} sectionNames={sectionHeaders} isSmallScreen={isSmallScreen} />}
            </ChakraBox>
  )
}

export default Navbar

const Tabs  = ({ selected, setSelected, sectionNames, isSmallScreen }) => {
        return (
                <Flex
                        as={motion.div}
                        variants={boxVariant}
                        animate='visible'
                        initial='hidden' gap={{base: 5, md: 4}}
                >
                                {sectionNames.map((section, index) => {
                                        return (
                                                <Tab
                                                        key={index}
                                                        setSelected={setSelected}
                                                        selected={selected === index}
                                                        name={section.name}
                                                        Icon={section.icon}
                                                        isSmallScreen={isSmallScreen}
                                                />
                                        )
                                })}
                </Flex>
        )
}

const Tab = ({ name, Icon, isSmallScreen}) => {
        const tabName = name === 'Home' ? 'hero' : name;
        return (
                <Link
                        to={tabName} spy={true} smooth={true} offset={0} duration={500}
                >
                        <Flex
                                pos={'relative'} w={'full'}
                                as={motion.div}
                                variants={listVariant}
                                cursor={'pointer'}
                                fontSize={{ base: 'lg', md: 'xl', 'xl': '2xl' }}
                                fontWeight={'thin'}
                                
                        >
                                <WordShift word={name} Icon={Icon} isSmallScreen={isSmallScreen} />
                        </Flex>
                </Link>
        )
}

const WordShift = ({ word, Icon, isSmallScreen }) => {
        return (
          <Box 
            h={{base: '16px', md: '23px', lg:'23px'}} display={'inline-block'} overflow={'hidden'} lineHeight={1.1}
            ml={1} textAlign={'left'} fontFamily={'Libre Baskerville, serif'}
            as={motion.div} whileHover={'hover'} 
          >
            <Box
              as={motion.div}
              display={'flex'} flexDirection={'column'} 
              initial={{
                y: "0%",
              }}
              variants={{
                hover: {
                  y: "-50%",
                },
              }}
              transition={{
                duration: 0.5,
              }}
            >
                {isSmallScreen ? (
                        <>
                                <Box><Icon /></Box>
                                <Box color={'#9b59b6'}><Icon /></Box>
                        </>
                ) : (
                        <>
                                <Box>{word}</Box>
                                <Box color={'#9b59b6'}>{word}</Box>
                        </>
                )}
            </Box>
          </Box>
        )
}

const boxVariant = {
        hidden: {
                opacity: 0,
                transition: {
                        staggerChildren: 1,
                }
        },
        visible: {
                opacity: 1,
                transition: {
                        staggerChildren: .3,
                        delay: .4,
                        when: "beforeChildren",
                },
        },
}
const listVariant = {
        hidden: {
                opacity: 0,
        },
        visible: {
                opacity: 1,
        },
}

{/* <Box 
                        pos={'absolute'} zIndex={5}
                        left={{base:-9, sm: -9, lg: -10}} bottom={{base: -20, sm: -24, lg: -28}}
                        color={'#fff'}
                        fontSize={{base: '.8rem', lg: '1rem'}}
                        as={motion.div}
                        initial={{
                                rotate: '270deg',
                                opacity: 0
                        }}
                        animate={{
                                opacity: 1,
                                transition: {
                                        delay: .3
                                }
                        }}
                        display={'flex'} gap={0} justifyContent={'center'} alignItems={'center'}
                >
                        Playground 
                        <Box  
                                cursor={'pointer'}
                                onClick={() => setMode(!mode)}
                                border={'1px solid #fff'}
                                w={12} ml={2} p={1}
                                rounded={'full'}
                                display={'flex'} pos={'relative'} alignItems={'center'}
                                justifyContent={mode ? 'start' : 'end'}
                                bg={mode ? '#e31b60' : '#04c2c9'}

                        >
                                <Box
                                        h={{base: 3, lg: 4}} rounded={'full'} bg={'white'} w={{base: 3, lg: 4}}
                                        as={motion.div}
                                        layout
                                        transition={{
                                                duration: 0.75,
                                                type: "spring",
                                        }}                
                                />
                        </Box>
                        
                </Box> */}