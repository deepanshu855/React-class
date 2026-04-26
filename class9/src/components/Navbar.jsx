import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-24 bg-red-800 flex justify-around between items-center gap-4 mb-4'>
        <h1 className='text-3xl'>Navbar</h1>
        <div>
            <Link className='text-3xl m-2' to='/home'>Home</Link>
            <Link className='text-3xl m-2' to='/about'>About</Link>
            <Link className='text-3xl m-2' to='/product'>Product</Link>
            <Link className='text-3xl m-2' to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar