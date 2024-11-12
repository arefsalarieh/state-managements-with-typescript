import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between  h-20 w-[90%] mx-auto'>

      <div className='mt-6 flex gap-10'>
        <NavLink to='/' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>home</NavLink>
      </div>

    </div>
  )
}

export default Header