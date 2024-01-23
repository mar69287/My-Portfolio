import './App.css'
import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { useEffect, useState } from "react";
import SplashPage from './components/SplashPage'

function App() {
  const [selected, setSelected] = useState(0); 
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const changeStatus = () => {
      setTimeout(() => {
        setShowSplash(false);
      }, 3400);
    }
    changeStatus()
  }, []);

  return (
    <Box className='container' h={'100vh'}>
      {showSplash ? (
        <SplashPage />
      ) : (
        <>
        <Navbar setSelected={setSelected} selected={selected}/>
        <Hero />
        <About />
        <Projects />
        <Contact />
        </>
      )}
      
    </Box>
  )
}

export default App
