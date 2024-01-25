import { HStack, Box } from '@chakra-ui/react';
import './Navbar.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircle } from "react-icons/fa";

const Navbar = ({ setSelected, selected }) => {
  const sectionNames = ['Home', 'About', 'Projects', 'Contact'];
  
  return (
    <AnimatePresence>
            <HStack as={'nav'} color={selected === 0 ? '#f5f5f5' : '#000'} h={{base:'3.2rem', lg: '4rem'}} fontSize={{base: 'md', md: 'lg'}} justifyContent={'space-between'} gap={2} bgColor={selected === 0 ? 'rgba(0, 0, 0, 0.2)': 'rgba(255, 255, 255, 0.5)'} w={'full'} zIndex={20} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} top={'0'} p={".7rem 1.7rem"}  backdropBlur={'15px'}>
                <Box
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: {duration: .5, delay: 1.4} }}
                >
                        MR
                </Box>
                <Box 
                        flex={1} display={'flex'} justifyContent={'end'} alignItems={'center'} gap={2}
                        as={motion.div}
                        variants={boxVariant}
                        animate='visible'
                        initial='hidden'
                >
                        {sectionNames.map((name, index) => {
                                return (
                                        <Box
                                                as={motion.div}
                                                key={index}
                                                variants={listVariant}
                                                whileHover={
                                                        selected === index
                                                          ? { scale: 1, opacity: 1 }
                                                          : { scale: 1.1, opacity: 0.7 }
                                                      }
                                                w={'max-content'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                                                cursor={'pointer'}
                                                onClick={() => setSelected(index)}
                                        >
                                                {selected === index ? (
                                                        <AnimatePresence>
                                                                <Box
                                                                        as={motion.div}
                                                                        initial={{ scale: 0, }}
                                                                        animate={{ scale: 1, transition: { delay: 0.0 } }}
                                                                        exit={{ scale: 0}}
                                                                        fontSize={'8px'}
                                                                >
                                                                        <FaCircle/>
                                                                </Box>
                                                        </AnimatePresence>
                                                ) : (
                                                        name
                                                )}
                                        </Box>
                                )
                        })}
                </Box>
            </HStack>
    </AnimatePresence>
  )
}

export default Navbar

const boxVariant = {
        hidden: {
                transition: {
                staggerChildren: 1,
                }
        },
        visible: {
                transition: {
                staggerChildren: .4,
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