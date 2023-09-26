import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <Box className='container' h={'100vh'} >
      <Hero />
      <About />
      <Projects />
    </Box>
  )
}

export default App
