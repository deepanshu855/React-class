import React from 'react'
import Vote from './components/Vote';
import Novote from './components/Novote';

// Conditional rendering.
const App = () => {
  const age= 17;
  
  return (
    <div className='h-screen w-screen bg-gray-900 text-white p-12'>
      {(age>18) ? <Vote /> : <Novote />}
    </div>
  )
}

export default App