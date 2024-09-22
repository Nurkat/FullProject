import React from 'react'

function Frames({title,number}) {
  return (
    <div className='w-[258px] h-[134px] border-slate-300 border-[1.5px]  hover:border-[#3751FF] mb-[30px]  bg-[#FFFFFF]'>
        <div className='flex flex-col items-center pt-[24px]'>
        <span className='text-[#9FA2B4] text-[19px] leading-[19px]  hover:text-[#3751FF] font-bold mb-[12px]'>{title}</span>
        <p  className='text-[#252733] text-[40px] leading-[50px] font-bold hover:text-[#3751FF]'>{number}</p>
        </div>
    </div>
  )
}

export default Frames