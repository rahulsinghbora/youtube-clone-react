import React from 'react'
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more from "../../assets/more.png"
import notification from "../../assets/notification.png"
import profile from "../../assets/user_profile.jpg"
import { Link } from 'react-router-dom'

const Navbar = ({sidebar,setsidebar}) => {
  return (
    <nav className='flex gap-2  shadow-md justify-between px-[2%] py-4 w-[100vw] h-[70px] sticky top-0 z-10 bg-[#fff]'> 
        <div className='flex gap-4 items-center'>
            <img onClick={()=>setsidebar(!sidebar)} src={menu_icon}/>
           <Link to='/'><img src={logo}/></Link>
        </div>
        <div className='flex items-center relative '>
            <input className='w-[460px] p-2 bg-transparent outline-none border rounded-3xl' type='text' placeholder='search something'/>
            <img className='absolute right-0 mr-4' src={search}/>
        </div>
        <div className='flex gap-4'>
            <img src={upload}/>
            <img  src={more}/>
            <img src={notification}/>
            <img className='rounded-[50%]' src={profile}/>
        </div>
       
    </nav>
  )
}

export default Navbar;
