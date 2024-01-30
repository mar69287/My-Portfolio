import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0); 
  const [mode, setMode] = useState(true)

  return (
    <Box className='container' minH={'100vh'} w={'full'} pos={'relative'}>
      <Navbar setSelected={setSelected} selected={selected} mode={mode} setMode={setMode} />
      <Hero />
      <Projects />
      <About />
      <Contact />   
    </Box>
  )
}

export default App