import { HStack, Box, Flex } from '@chakra-ui/react';
import './Navbar.css';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ setSelected, selected, mode, setMode }) => {
  const sectionNames = ['Home', 'About', 'Projects', 'Contact'];
  
  return (
            <HStack as={'nav'} color={'#f5f5f5'} h={{base:'3.2rem', lg: '4rem'}} fontSize={{base: 'md', md: 'lg'}} justifyContent={'space-between'} gap={2} 
                bgColor={'rgba(0, 0, 0, 0.2)'} w={'full'} zIndex={20} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} top={'0'} p={".7rem 1.7rem"}  backdropBlur={'15px'}
            >
                {selected === 0 && <Box 
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
                        
                </Box>}
                <Box
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: {duration: .5, delay: .5} }}
                >
                        MR
                </Box>
                {mode && <Tabs selected={selected} setSelected={setSelected} sectionNames={sectionNames} />}
            </HStack>
  )
}

export default Navbar

const Tabs  = ({ selected, setSelected, sectionNames }) => {
        return (
                <Flex
                        as={motion.div}
                        variants={boxVariant}
                        animate='visible'
                        initial='hidden' gap={0}
                >
                        <AnimatePresence>
                                {sectionNames.map((name, index) => {
                                        return (
                                                <Tab
                                                        key={index}
                                                        setSelected={setSelected}
                                                        selected={selected === index}
                                                        name={name}
                                                        tabNum={index}
                                                />
                                        )
                                })}
                        </AnimatePresence>
                </Flex>
        )
}

const Tab = ({ setSelected, selected, name, tabNum}) => {
        return (
                <Box
                        color={'white'} pos={'relative'} w={'full'}
                        as={motion.div}
                        variants={listVariant}
                >       
                        <Box
                                rounded={0}
                                px={{base: '3px', sm: 1}}
                                color={'white'} pos={'relative'} w={'full'} borderBottom={'2px solid rgba(245, 245, 245, 0.7)'}
                                display={'flex'} justifyContent={'center'} alignItems={'center'}
                                onClick={() => setSelected(tabNum)}
                                cursor={selected ? 'default' : 'pointer'}
                        >
                                <Box
                                        color={selected ? 'white' : 'rgba(245, 245, 245, 0.7)'}
                                        _hover={{ color: selected ? 'white' : '#e31b60', transition: 'all 0.4s ease' }}
                                >
                                        {name}
                                </Box>
                        </Box>
                        {selected && 
                                <Box 
                                        as={motion.span}
                                        layoutId="tabs-underline"
                                        pos={'absolute'} bottom={0} left={0} right={0} zIndex={15}
                                        h={'2px'} bg={'white'}
                                />
                        }
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
                        staggerChildren: .4,
                        delay: .7,
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