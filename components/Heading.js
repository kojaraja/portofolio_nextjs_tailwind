import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='test-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        {title}
        <div className='bg-[#8A2BE2] h-[2px] w-[40px] translat-y-1'></div>
    </div>
  )
}

export default Heading