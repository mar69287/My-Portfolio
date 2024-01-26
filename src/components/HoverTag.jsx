import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const HoverTag = ({name}) => {
  return (
    <Flex   
        pos={'absolute'} zIndex={10}
        color={'#fff'} 
        fontSize={{base: '.7rem', lg: '.9rem'}}
        borderRadius={'full'}
        bg={'rgba(97, 97, 97)'}
        border={'1px solid rgba(255, 255, 255, .1)'}
        px={2} py={1} 
        as={motion.div}
        initial={
            {opacity: 0, scale: 0}
        }
        variants={{
            hover: {
                opacity: 1,
                scale: .95,
                y: "-100%",
            },
            }}
    >
        {name}
    </Flex>
  )
}

export default HoverTag