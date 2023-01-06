import React from 'react'

import TypeWriter from "typewriter-effect"
import Button from './Button'

const Hero = () => {
  return (
    <div id='home' className='bg-[url("/zeus.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-5'>
        <div className='max-w-[550px] text-white flex flex-col gap-[40px]'>
            <div>
                <h1 className='text-[30px]'>Saya Nazar Muhammad Fikri Fadillah</h1>
                <h4 className='text-2x1 mt-3'>
                    <TypeWriter 
                    options={{
                        strings: [
                            "Front end Developer",
                            "UI/UX Desainer",
                            "Artis Art"
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true,
                        loop: true,
                    }} 
                    />
                </h4>
            </div>
            <div className='bg-[#8A2BE2] h-[2px] w-[40px]'></div>
            <div>
                <p>saya adalah salah satu siswa dari SMKN 1 CIMAHI, yang sedang melaksanakan pkl di Pt.infinys</p>
                <Button link="#" text="Learn more"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero