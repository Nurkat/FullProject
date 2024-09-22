import React from 'react'
import Logo from "../assets/images/logo.svg"
import { Link} from 'react-router-dom'
import NavbarLink from './NavbarLink'
import { AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, OverviewIcon, SettingsIcon, SubscriptionIcon, TicketsIcon } from '../assets/images/icons'


function Navbar() {
    let NavbarList = [
        {
            id:1,
            icon:<OverviewIcon/>,
            title:"Overview",
            path:"/",
        },
        {
            id:2,
            icon:<TicketsIcon/>,
            title:"Tickets",
            path:"/tickets",
        },
        {
            id:3,
            icon:<IdeasIcon/>,
            title:"Ideas",
            path:"/ideas",
        },
        {
            id:4,
            icon:<ContactsIcon/>,
            title:"Contacts",
            path:"/contacts",
        },
        {
            id:5,
            icon:<AgentsIcon/>,
            title:"Agents",
            path:"/agents",
        },
        {
            id:6,
            icon:<ArticlesIcon/>,
            title:"Articles",
            path:"/articles",
        },
        {
            id:7,
            icon:<SettingsIcon/>,
            title:"Settings",
            path:"/settings",
        },
        {
            id:8,
            icon:<SubscriptionIcon/>,
            title:"Subscriptions",
            path:"/subscriptions",
        }
    ]
  return (
    <div className='w-[20%]  bg-[#363740]'>
        <div className='pt-[37px] pl-[32px] pb-[59px] '>
            <Link className='flex items-center space-x-3' to={'/'}>
            <img src={Logo} alt="Site-Logo" width={32} height={32} />
            <h1 className='text-[19px] font-bold leading-[23.84px] text-[#A4A6B3] opacity-70'>Dashboard Kit</h1>
            </Link>
        </div>
        <nav>{NavbarList.map(item =>  <NavbarLink key={item.id} item={item}/>)}</nav>
    </div>
  )
}

export default Navbar