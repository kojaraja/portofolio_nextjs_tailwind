import React from 'react'
import Heading from './Heading'

const Work = () => {
  return (
    <section id='art' className='container mx-auto py-10 px-4'>
        <Heading title="Seni Menggambar" />
        <div className='grid grid-cols-3 gap-4'>
        <div className='row-span-2 relative group'>
            <img src="/gurita.webp" alt="" />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white'>
                Pembantu Gurita
            </div>
        </div>
        <div className=' relative group'>
            <img src="konica.jpg" alt="" />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white'>
                Pembantu Gurita
            </div>
        </div>
        <div className='relative group'>
            <img src="/konica.jpg" alt="" />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white'>
                Pembantu Gurita
            </div>
        </div>
        <div className=' relative group'>
            <img src="konica.jpg" alt="" />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white'>
                Pembantu Gurita
            </div>
        </div>
        <div className='relative group'>
            <img src="/konica.jpg" alt="" />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white'>
                Pembantu Gurita
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Work