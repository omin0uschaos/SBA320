import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Create from './pages/Create'
import Creations from './pages/Creations'
import Creation from './pages/Creation'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

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
      <Route path='/creations/:title' element={<Creation />}></Route>

      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<NotFound />} />
      
    </Routes>

    </>
  )
}

export default App
