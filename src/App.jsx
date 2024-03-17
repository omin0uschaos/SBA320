import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}>

      </Route>
    </Routes>

    </>
  )
}

export default App
