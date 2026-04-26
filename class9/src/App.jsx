import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import MenProduct from './pages/MenProduct'
import WomenProduct from './pages/WomenProduct'
import AnyCourse from './pages/AnyCourse'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div className='bg-black h-screen text-white overflow-hidden'>
      <Navbar />
      <Routes>

        {/* Static Routes  */}
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>

        {/* Nested Routes  */}
        <Route path='/product/men' element={<MenProduct />}/>
        <Route path='/product/women' element={<WomenProduct/>}/>

        {/* Dynamic Routes  */}
        <Route path='/courses/:courseId' element={<AnyCourse/>}/>

        {/* page not found */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App