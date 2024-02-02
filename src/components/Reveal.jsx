import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react'

const Reveal = ({ children, hidden, visible }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .5 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ChakraBox = chakra(motion.div, {shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),});

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <Box ref={ref} pos={'relative'}  w={'full'}>
        <ChakraBox
            variants={{
                hidden,
                visible,
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </ChakraBox>
    </Box>
  )
}

export default Reveal