import React, { useContext } from 'react'
import {BellIcon, SearchIcon } from '../assets/images/icons'
import Avatar from '../assets/images/header.svg'
import { Context } from '../Context/Context'
function Header() {
    const {path} =useContext(Context)
  return (
    <>
    <div className='flex items-center justify-between mb-[54px]'>
   <h2 className='font-bold text-[24px] leading-[30px]'>{path}</h2>
   <div className='flex items-center space-x-[24px]'>
       <SearchIcon/>
       <BellIcon/>
       <p className='text-[14px] font-semibold'>Jones Ferdinand</p>
       <img src={Avatar} alt="Ava img" height={40} width={40} />
   </div>
    </div>
   
    </>
  )
}

export default Header