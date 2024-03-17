import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Create from './pages/Create'
import Creations from './pages/Creations'
import Contact from './pages/Contact'

import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/creations' element={<Creations />}></Route>
      <Route path='/contact' element={<Contact />}></Route>

      
    </Routes>

    </>
  )
}

export default App
