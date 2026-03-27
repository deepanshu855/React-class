import React, { useState } from 'react'

const App = () => {
  let [marks, setMarks] = useState([45, 67, 54, 89, 32]);

  const giveGrace= ()=>{
    marks= marks.map((elem)=> {
      return elem+5;
    })
    setMarks(marks);
  }
  
  return (
    <div>
      {marks.map((elem, idx)=>{
        return <h1 key={idx}>Student {idx+1} = {elem} ({(elem>33)? "PASS": "FAIL"})</h1>
      })}
      <button onClick={giveGrace}>Give Grace</button>
    </div>
  )
}

export default App
