import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="logo"><h3>Horizon Courts</h3></div>
        <div className="links">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Coaches</a>
            <a href="#">Events</a>
            <a href="#">Contacts</a>
        </div>
        <button className='btn'>Book now <i class="ri-arrow-right-up-line"></i></button>
    </div>
  )
}

export default Nav