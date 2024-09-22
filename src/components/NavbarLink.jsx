import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/Context';


function NavbarLink({item}) {
    const {setPath} = useContext(Context)
    function handleNavClick(e){
        if(e.target.lastElementChild){
            setPath(e.target.lastElementChild.textContent);
        }
        else{
            setPath(e.target.textContent);
    }

    }
  return (
   <NavLink onClick={handleNavClick} className={" relative py-[18px] pl-[32px] flex items-center text-[#A4A6B3] space-x-[24px] "} to={item.path}>
     {item.icon}
      <span className='font-normal text-[16px] leading-5 '>{item.title}</span>
   </NavLink>
  )
}

export default NavbarLink