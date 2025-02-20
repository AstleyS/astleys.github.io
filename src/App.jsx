import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import MyPath from './components/MyPath/MyPath'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  
  const components = [<Home />, <About />, <MyPath />, <Portfolio />, <Contact />]

  return (
    <>
    <Header />, 
      {components.map((component, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {component}
        </motion.div>
      ))}
    </>
  )
}

export default App