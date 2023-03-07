import React from 'react'

import {NavLink } from 'react-router-dom'
const Navbar = () => {

  let activeStyle = {
    color: "blue",
  };
  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] absolute w-full'>
      <div className='flex flex-row item-center'>
        <NavLink  to='/' className='text-blue-900 text-4xl font-bold cursor-pointer'>FLXIN</NavLink >
      <div className='hidden gap-10 ml-4  items-center md:flex'>
      <NavLink      style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  to= "popular"> Popular</NavLink >
        <NavLink      style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to ="trending">Trending</NavLink >
        <NavLink      style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to ="Horror">Horror</NavLink >
        <NavLink      style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to ="topRated">Top rated</NavLink >
        <NavLink      style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to ="upcoming">Upcoming</NavLink >
      </div>
      </div>
        <div>
          
        </div>

    </div>
  )
}

export default Navbar
