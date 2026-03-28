import React from 'react'

const App = () => {
  const formHandler= (e)=>{
    e.preventDefault();
    console.log("Submitted");
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input type="text" placeholder='Enter name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
