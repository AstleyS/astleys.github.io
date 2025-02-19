import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import MyPath from './components/MyPath/MyPath'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <MyPath />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
