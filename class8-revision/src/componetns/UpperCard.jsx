import React from 'react'

const UpperCard = (props) => {
    // console.log(props)
  return (
    <div>
        <div className="upper">
        <div className="h-30 w-full rounded-2xl overflow-hidden">
          <img
            className="h-full w-full"
            src="https://i.pinimg.com/736x/50/77/c9/5077c9aacda6ab232798da9e9302b7f1.jpg"
            alt="background"
          />
        </div>

        <div className="h-24 w-24 rounded-full overflow-hidden absolute top-1/4 left-1/3">
          <img className="h-full w-full" src={props.profilePic.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default UpperCard