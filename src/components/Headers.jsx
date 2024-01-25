import { Box, Heading } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const Headers = ({ left, right}) => {
  return (
    <AnimatePresence>
        <Box
            w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3}
            mb={{base: 1, md: 7, lg: 10}} color={'#fff'}
        >
            <Heading
                as={motion.div}
                fontSize={{base: '45px', md: '70px'}}
                fontWeight={'thin'} textTransform={'uppercase'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0, transition: {delay: .4, duration: .4} }}
            >
                {left}
            </Heading>
            <Heading
                as={motion.div}
                fontSize={{base: '45px', md: '70px'}}
                fontWeight={'bold'} textTransform={'uppercase'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0, transition: {delay: .4, duration: .4} }}
            >
                {right}
            </Heading>
        </Box>
    </AnimatePresence>
  )
}

export default Headers