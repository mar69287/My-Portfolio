import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box className='container' h={'100vh'} >
      <Hero />
      <Navbar />
      <About />
      <Projects />
    </Box>
  )
}

export default App
