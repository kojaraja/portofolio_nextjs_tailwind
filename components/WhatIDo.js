import React from 'react'
import Heading from './Heading'
import {RiLightbulbFlashLine} from 'react-icons/ri'

const WhatIDo = () => {
  return (
    <section id='km' className='container mx-auto py-10 px-4'>
        <Heading title="KarakTer" />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='shadow-lg flrx flex-col gap-4 px-8 py-10 bg-[#8A2BE2] text-white'>
            <RiLightbulbFlashLine className='text-[28px]' />
            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Saya adalah orang yang sangat kreatif, dan saya senang menggambar dan mendesain. Saya selalu memiliki ide-ide baru dan inovatif, dan saya suka mengeksplorasi kreativitas saya melalui gambar dan desain. Saya percaya bahwa kreativitas adalah salah satu kekuatan utama saya, dan saya selalu siap untuk mencoba hal-hal baru dan mengembangkan keterampilan saya dalam bidang ini.</p>

        </div>
        <div className='shadow-lg flrx flex-col gap-4 px-8 py-10 bg-[#8A2BE2] text-white'>
            <RiLightbulbFlashLine className='text-[28px]' />
            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Saya adalah orang yang sangat kreatif, dan saya senang menggambar dan mendesain. Saya selalu memiliki ide-ide baru dan inovatif, dan saya suka mengeksplorasi kreativitas saya melalui gambar dan desain. Saya percaya bahwa kreativitas adalah salah satu kekuatan utama saya, dan saya selalu siap untuk mencoba hal-hal baru dan mengembangkan keterampilan saya dalam bidang ini.</p>

        </div>
        <div className='shadow-lg flrx flex-col gap-4 px-8 py-10 bg-[#8A2BE2] text-white'>
            <RiLightbulbFlashLine className='text-[28px]' />
            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Saya adalah orang yang sangat kreatif, dan saya senang menggambar dan mendesain. Saya selalu memiliki ide-ide baru dan inovatif, dan saya suka mengeksplorasi kreativitas saya melalui gambar dan desain. Saya percaya bahwa kreativitas adalah salah satu kekuatan utama saya, dan saya selalu siap untuk mencoba hal-hal baru dan mengembangkan keterampilan saya dalam bidang ini.</p>

        </div>
        </div>
    </section>
  )
}

export default WhatIDo