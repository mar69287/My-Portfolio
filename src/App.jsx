import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { useState, useEffect, useRef } from 'react'
import Contact from './components/Contact'

function App() {

  return (
    <Box className='container' h={'100vh'} >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Box>
  )
}

export default App
