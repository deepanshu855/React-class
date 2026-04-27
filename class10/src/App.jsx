import React, { useState } from 'react'
import Navbar from './components/Navbar';

// How to pass data from child to parent
const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme= (newTheme)=>{
    setTheme(newTheme);
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App