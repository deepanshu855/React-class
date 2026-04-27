import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div className='h-fit w-full bg-amber-400 text-white flex justify-evenly gap-2 mb-2'>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
          <p className='text-3xl shrink-0'>Sale is Live!!!</p>
        </div>

        <Outlet/>
    </div>
  )
}

export default Courses