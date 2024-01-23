import { motion } from 'framer-motion'
import { SiChakraui, SiBootstrap } from 'react-icons/si'
import { BiLogoReact, BiLogoJavascript, BiLogoTailwindCss } from 'react-icons/bi'
import materialUI from '../assets/material-ui.png'
import framer from '../assets/framer-motion.svg'
import python from '../assets/python.svg'
import photoshop from '../assets/photoshop.svg'
import react from '../assets/react.svg'
import { SiExpress, SiNodedotjs, SiPostgresql, SiMongodb, SiCss3 } from 'react-icons/si'
import { Box, Img } from '@chakra-ui/react'

const Skills = () => {
  return (
    <>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={react} />
        </Box>
        <Box fontSize={'2.1rem'} color={'#fde047'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <BiLogoJavascript />
        </Box>
        <Box fontSize={'2.1rem'} color={'#22d3ee'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiChakraui />
        </Box>
        <Box fontSize={'2.1rem'} color={'#6b21a8'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiBootstrap />
        </Box>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={materialUI} />
        </Box>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'1.8rem'} w={'1.8rem'} src={framer} />
        </Box>
        <Box fontSize={'2.1rem'} color={'#0284c7'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiCss3 />
        </Box>
        <Box fontSize={'2.1rem'} color={'#10b981'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiNodedotjs />
        </Box>
        <Box fontSize={'2.1rem'} color={'#3b82f6'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiExpress />
        </Box>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'} >
            <Img h={'2rem'} w={'2rem'} src={python} />
        </Box>
        <Box fontSize={'2.1rem'} color={'#3b82f6'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiPostgresql />
        </Box>
        <Box fontSize={'2.1rem'} color={'#16a34a'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <SiMongodb />
        </Box>
        <Box fontSize={'2.1rem'} color={'#22d3ee'} h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <BiLogoTailwindCss />
        </Box>
        <Box h={'2,2rem'} w={'2.2rem'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <Img h={'2rem'} w={'2rem'} src={photoshop} />
        </Box>
    </>
  )
}

export default Skills