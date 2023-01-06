import Link from "next/link";
import React from "react";

import {HiDownload} from 'react-icons/Hi'
import { FiMenu } from "react-icons/fi"

const Navbar = ({toggleSidebar}) => {
    return (
        <div className='bg-white fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className='text-[24px]'>Portofolio</div>

                <ul className='hidden md:flex gap-6'>

                    <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#home' > Home</Link>
                        </li>
                        <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#ab' > About</Link>
                        </li>
                        <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#km' >Portofolio  </Link>
                        </li>
                        <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#sk' > Skils</Link>
                        </li>
                        <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#art' > Art</Link>
                        </li>
                        <li className="hover:text-[#8A2BE2]"> 
                           <Link  href='/#contak' > Contact</Link>
                        </li>
                        
                    
                </ul>
                <a href="#" className='hidden md:flex border-[#8A2BE2] px-4 py-1 text-[#8A2BE2] rounded-[5px] items-center gap-2 hover:bg-[#8A2BE2] hover:text-white transition duration-200'>
                    Download cv
                    <HiDownload className="animate-bounce"/>
                    </a>

                    <div className='md:hidden text-[24px]' onClick={toggleSidebar}>
                        <FiMenu />
                    </div>
            </div>
        </div>
    )
}

export default Navbar