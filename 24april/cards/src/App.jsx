import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import AllRoutes from './AllRoutes'
import Home from './pages/Home'
function App() {
  

  return (
    <>
     <Navbar/>
     <AllRoutes/>
    </>
  )
}

export default App
