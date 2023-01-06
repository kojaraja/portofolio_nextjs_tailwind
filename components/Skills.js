import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <section id='sk' className='container mx-auto py-10 px-4'>
        <Heading title="Skills" />
        <p className='text-gray-600 -mt-10 mb-10'>Saya memiliki Skill dalama hal mendesain atau menggambar walaupun masih belum teralu mahir, sayapun memahami beberapa bahasa pemograman,dan berikut beberapa skills yang saya miliki beserta rate kemampuannya</p>
        <diiv className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <p>React</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[30%]'></div>
                </div>
            </div>
            <div>
                <p>Node js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[40%]'></div>
                </div>
            </div>
            <div>
                <p>Next js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[40%]'></div>
                </div>
            </div>
            <div>
                <p>Tailwind css</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[40%]'></div>
                </div>
            </div>
            <div>
                <p>Html</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
            <div>
                <p>JavaScript</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[60%]'></div>
                </div>
            </div>
            <div>
                <p>Css</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#8A2BE2] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
        </diiv>
    </section>
  )
}

export default Skills