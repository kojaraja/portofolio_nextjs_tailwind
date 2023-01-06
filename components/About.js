import React from 'react'
import Heading from './Heading'
import {AiOutlineGift} from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { TbPacman }  from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'
import Button from './Button'

const About = () => {
  return (
    <section id='ab' className='container mx-auto py-10 px-4'>

        <Heading title="Tentang saya" />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            <div>
                <img className='w-[400px]' src="/konica.jpg" alt="" />
            </div>
            <div>
                <div className='flex items-center justify-between w-[300px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4 items-center font-medium'>
                            <AiOutlineGift className='text-[#8A2BE2] text-[22px]' />
                            Thn/Tgl
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <FiBookOpen className='text-[#8A2BE2] text-[22px]' />
                            Sekolah
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <BsGlobe2 className='text-[#8A2BE2] text-[22px]' />
                            Website
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <TbPacman className='text-[#8A2BE2] text-[22px]' />
                            Internet
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <IoLocationOutline className='text-[#8A2BE2] text-[22px]' />
                            Lokasi
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 text-gray-600'>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                    </div>

                    <div className='flex flex-col gap-6 text-gray-600'>
                        <div>18.01.2006</div>
                        <div>SMKN 1 CIMAHI</div>
                        <div>www.SWJ.com</div>
                        <div>Art, Reading</div>
                        <div>Jl.ciseupan RT01/RW07</div>
                    </div>
                </div>

                <div className='max-w-[800px]'>
                    <h2 className='font-bold mt-16 mb-10'>Saya Nazar Muhammad Fikri Fadillah</h2>
                    <p className='text-gray-600'>
                        Halo perkenalkan nama saya Nazar Muhammad Fikri Fadillah panggil saja saya Nazar, Umur saya sekarang 16 tahun sebentar lagi 17, minat saya adalah UI/UX Desainer dan Front end Developer.
                    </p>
                    <Button link="#" text="Tekan saya" />
                </div>

            </div>
        </div>

    </section>
  )
}

export default About