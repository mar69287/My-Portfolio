import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider,  extendTheme } from '@chakra-ui/react'
import "@fontsource/league-spartan"
import "@fontsource/libre-baskerville";

const theme = extendTheme({
  fonts: {
    body: "Libre Baskerville, serif",
    heading: "League Spartan, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
)
