import React from 'react'

const Washroom = (props) => {
  return (
    <div className={`wash ${props.gender}`}>
      {props.gender} Washroom
    </div>
  )
}

export default Washroom
