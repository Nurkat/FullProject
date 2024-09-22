import React from 'react'

function Statistic({title,count}) {
  return (
 <div className='w-[300px]  border-[1px] p-[15px] border-slate-400 bg-[#FFFFFF]'>
    <div className=' flex flex-col items-center space-y-[6px]'>
    <p className='text-[#9FA2B4] font-semibold text-[16px] leading-[22px]'>{title}</p>
    <span className='text-[#252733] text-[24px] leading-[30px] font-bold'>{count}</span>
    </div>
 </div>
  )
}

export default Statistic