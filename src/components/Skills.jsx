import { motion } from 'framer-motion'
import { BiLogoJavascript, BiLogoTailwindCss } from 'react-icons/bi'
import { SiExpress, SiNodedotjs, SiPostgresql, SiMongodb, SiCss3, SiBootstrap, SiChakraui, SiAmazonaws } from 'react-icons/si'
import materialUI from '../assets/material-ui.png'
import framer from '../assets/framer-motion.svg'
import python from '../assets/python.svg'
import photoshop from '../assets/photoshop.svg'
import react from '../assets/react.svg'
import vite from '../assets/vitejs.svg'
import { Box, Img } from '@chakra-ui/react'
import HoverTag from './HoverTag'

const Skills = () => {
  return (
    <>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'} pos={'relative'}
            as={motion.div} whileHover="hover" cursor={'pointer'}
        >
            <HoverTag name={'React'} />
            <Img h={'2rem'} w={'2rem'} src={react} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'} fontSize={'2.1rem'} color={'#fde047'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <BiLogoJavascript />
            <HoverTag name={'Javascript'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#22d3ee'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiChakraui />
            <HoverTag name={'Chakra UI'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#6b21a8'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiBootstrap />
            <HoverTag name={'Bootstap'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={materialUI} />
            <HoverTag name={'Material UI'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'1.8rem'} w={'1.8rem'} src={framer} />
            <HoverTag name={'Framer Motion'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#0284c7'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiCss3 />
            <HoverTag name={'CSS3'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#10b981'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiNodedotjs />
            <HoverTag name={'Node.js'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#3b82f6'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiExpress />
            <HoverTag name={'Express'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'} >
            <Img h={'2rem'} w={'2rem'} src={python} />
            <HoverTag name={'Python'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#3b82f6'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiPostgresql />
            <HoverTag name={'PostgreSQL'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#16a34a'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiMongodb />
            <HoverTag name={'MongoDB'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#22d3ee'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <BiLogoTailwindCss />
            <HoverTag name={'Tailwind CSS'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={photoshop} />
            <HoverTag name={'Photoshop'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  fontSize={'2.1rem'} color={'#F6AD55'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiAmazonaws />
            <HoverTag name={'AWS'} />
        </Box>
        <Box as={motion.div} whileHover="hover" cursor={'pointer'}  h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={vite} />
            <HoverTag name={'Vite'} />
        </Box>
    </>
  )
}

export default Skills