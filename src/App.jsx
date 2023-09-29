import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { useState } from "react";

function App() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <Box className='container' h={'100vh'} >
      {!isContactVisible &&
        <Navbar isContactVisible={isContactVisible}/>}
      <Hero />
      <About />
      <Projects />
      <Contact setIsContactVisible={setIsContactVisible}/>
    </Box>
  )
}

export default App
