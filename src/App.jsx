import React, { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contact from './component/Contactus'
import Home from "./component/Home"
import Service from "./component/Service"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route to path='/home' element= {<Home/>}/>
        <Route to path='/about' element= {<About/>}/>
        <Route to path='/service' element= {<Service/>}/>
        <Route to path='/contact' element= {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
