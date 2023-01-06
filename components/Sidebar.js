import React from 'react'

import {RiCloseFill} from "react-icons/ri"

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}>
        <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]
        hover:cursor-pointer' onClick={toggleSidebar}>
            <RiCloseFill />
        </div>
        <d className='flex flex-col gap-4 text-[28px]'>
            <a className='hover:text-[#8A2BE2]' href="/#home">Home</a>
            <a className='hover:text-[#8A2BE2]' href="/#contak">About</a>
            <a className='hover:text-[#8A2BE2]' href="#">Portofolio</a>
            <a className='hover:text-[#8A2BE2]' href="#">Blogs</a>
            <a className='hover:text-[#8A2BE2]' href="#">Contact</a>
        </d>
    </div>
  )
}

export default Sidebar