import React from 'react'

function Section() {
  return (
    <>
    <div className='p-[32px] w-[650px]'>
    <h2 className='text-[19px] leading-[23px] font-bold mb-[8px] '>Today’s trends</h2>
    <div className='flex justify-between items-center'>
    <span className='text-[#9FA2B4] text-[12px] leading-[16px]'>as of 25 May 2019, 09:41 PM</span>
    <div className='flex space-x-[56px]'>
    <span className='w-[60px] text-[#9FA2B4] text-[12px] leading-[15px] font-semibold '>Today</span>
    <p className=' text-[#9FA2B4] text-[12px] leading-[15px] font-semibold'>Yesterday</p>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Section