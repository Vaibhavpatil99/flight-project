import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import plane from "../imgs/plane.png"
const Navbar = () => {
  return (

    <div className='flex justify-between items-center bg-blue-200'>
      <div className='flex bg-blue-200'>
        <h2 className='text-3xl font-semibold text-red-700'>Book Your Flight</h2>
        <img src={plane} className="h-12" alt="" />
      </div>
      <div className='flex items-center text-2xl font-semibold'>
        <div className='mx-12'>
          <Link to="/">Home</Link>
        </div>
        <div className='mx-12'>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar