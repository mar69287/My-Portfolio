import { Box, Flex, HStack, Heading } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import './Header.css'
import { useRef } from 'react'
import { GoNorthStar } from "react-icons/go";


const Headers = ({ left, right, subtitles }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.75})
  return (

        <Box
            width={{base: '100%'}} mx={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={0} className='logos'
            mb={{base: 1, md: 7, lg: 10}} color={'#fff'} flexDirection={'column'} overflowX={'hidden'} pos={'relative'}
        >
            <HStack gap={0} ref={ref}>
                <Heading
                    as={motion.div}
                    fontSize={{base: '13vw', sm: '8vw', md: '7.5vw', xl: '7vw', '2xl': '6.5vw' }}
                    textTransform={'uppercase'}
                    variants={{
                        hidden: {
                            opacity: 0, x: -20
                        },
                        visible: {
                            opacity: 1, x: 0, transition: {delay: .4, duration: .4}
                        }
                    }}
                    initial={'hidden'}
                    animate={isInView ? 'visible' : 'hidden'}
                    lineHeight={1}
                >
                    {left}
                </Heading>
                <Box color={'#e31b60'} fontSize={{base: 'md', sm: 'lg', md: 'xl', xl: '2xl', '2xl': '3xl' }} className='icon-rotate'>

                    <GoNorthStar />
                </Box>
                <Heading
                    as={motion.div}
                    fontSize={{base: '13vw', sm: '8.5vw', md: '8vw', xl: '8vw', '2xl': '6.5vw' }}
                    textTransform={'uppercase'} fontStyle={'italic'}
                    variants={{
                        hidden: {
                            opacity: 0, x: 20
                        },
                        visible: {
                            opacity: 1, x: 0, transition: {delay: .4, duration: .4}
                        }
                    }}
                    initial={'hidden'}
                    animate={isInView ? 'visible' : 'hidden'}
                    lineHeight={1}
                >
                    {right}
                </Heading>
            </HStack>
            
            {subtitles && <Box
             display={'flex'} alignItems={'center'} h={'100%'} gap={{base:10, lg: 20}} px={4}
             width={{base: '100%', '2xl': '1370px'}} mx={'auto'} overflow={'hidden'}
            >
                <List list={subtitles} />
                <List list={subtitles} />
                <List list={subtitles} />
                <List list={subtitles} />
                <List list={subtitles} />
                <List list={subtitles} />
            </Box>}
        </Box>

  )
}

export default Headers


const List = ({ list }) => {
    return (
        <Box px={0} gap={{base:10, lg: 20}}
            className="logos-slide"
            color={'gray'} display={'flex'}
            fontSize={{base: 'sm', lg: ''}}
        >
            {list.map((sub, index) => (
                <Flex key={index} textTransform={'uppercase'} flexWrap={'nowrap'} display={'flex'} whiteSpace={'nowrap'} pos={'relative'}>{sub}</Flex>
            ))}
        </Box>
    )
}