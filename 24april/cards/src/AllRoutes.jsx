import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About';

import React from 'react'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
  )
}

export default AllRoutes;