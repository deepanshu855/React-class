import React from 'react'

const Card = (props) => {
  return (
    <div className='h-18 w-full flex items-center justify-around border-2 border-gray-400 bg-gray-700 p-8 rounded-2xl mb-1'>
      <h2 className='text-2xl'>{props.name}</h2>
      <h2 className='text-2xl'>{props.email}</h2>
    </div>
  )
}

export default Card
