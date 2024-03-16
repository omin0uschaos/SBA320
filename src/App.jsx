import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/navBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
