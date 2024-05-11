import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global-styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
   
  </React.StrictMode>
  </Router>
)
