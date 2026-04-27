import React, { useState } from 'react'

const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState("")

  const submitHandler= (e)=>{
    e.preventDefault();
    setnewTheme("");
    props.changeTheme(newTheme);
  }
  
    return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <input type="text" name="" placeholder='Enter theme' value={newTheme}
            onChange={(e)=>{
                setnewTheme(e.target.value);
            }}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Navbar