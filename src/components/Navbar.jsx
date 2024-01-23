import { HStack, Box } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-scroll';
import './Navbar.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircle } from "react-icons/fa";

const Navbar = ({ setSelected, selected }) => {
  const sectionNames = ['Home', 'About', 'Projects', 'Contact'];
  
  return (
    <HStack as={'nav'} color={'#f5f5f5'} justifyContent={'space-between'} gap={2} bgColor={'rgba(0, 0, 0, 0.2)'} w={'full'} zIndex={6} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} top={'0'} p={".7rem 1.7rem"}  backdropBlur={'15px'}>
        <Box>
                MR
        </Box>
        <Box flex={1} display={'flex'} justifyContent={'end'} alignItems={'center'} gap={2}>
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