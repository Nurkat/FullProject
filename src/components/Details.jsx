import React from 'react'

function Details() {
  return (
    <div className='w-[546px] p-[32px] bg-white rounded-md'>
        <div className='flex items-center justify-between '>
        <h3 className='font-bold text-[19px] leading-[23px]'>Unresolved tickets</h3>
        <span className='text-[#3751FF] font-semibold text-[14px] leading-[20px]'>View details</span>
        </div>
        <p className='text-[12px] leading-[16px] text-[#9FA2B4] mb-[16px]'>Group: Support</p>
        <div className='flex items-center justify-between border-b-[1.5px] p-[10px]'>
        <span>Waiting on Feature Request</span>
        <p>4238</p>
        </div>
        <div className='flex items-center justify-between border-b-[1.5px] p-[10px]'>
        <span>Awaiting Customer Response</span>
        <p>1005</p>
        </div>
        <div className='flex items-center justify-between border-b-[1.5px] p-[10px]'>
        <span>Awaiting Developer Fix</span>
        <p>914</p>
        </div>
        <div className='flex items-center justify-between border-b-[1.5px] p-[10px]'>
        <span>Pending</span>
        <p>281</p>
        </div>
    </div>
  )
}

export default Details