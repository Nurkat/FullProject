import React from 'react'
import { AddIcon } from '../assets/images/icons'

function AllTasks() {
  return (
    <div className='w-[500px] p-[32px] bg-white rounded-md'>
    <div className='flex items-center justify-between '>
    <h3 className='font-bold text-[19px] leading-[23px]'>Tasks</h3>
    <span className='text-[#3751FF] font-semibold text-[14px] leading-[20px]'>View all</span>
    </div>
    <p className='text-[12px] leading-[16px] text-[#9FA2B4] mb-[16px]'>Today</p>
    <div className='flex justify-between items-center border-b-[1.5px]'>
    <span className='text-[14px] leading-[20px] text-[#C5C7CD] font-semibold'>Create new task</span>
    <AddIcon/>
    </div>
    <div className='flex items-center justify-between py-[17px] border-b-[1.5px]'>
        <div className='flex items-center space-x-[16px] '>
     <input className='rounded-[50%]' type="checkbox" />
    <p className='font-semibold text-[14px] leading-[20px]'>Finish ticket update</p>
        </div>
    <button className=' w-[74px] py-[5px] px-[12px] text-white bg-[#FEC400] rounded-[10px] text-[11px] leading-[13px] font-bold'>Urgent</button>
    </div>
    <div className='flex items-center justify-between py-[18px] border-b-[1.5px]'>
        <div className='flex items-center space-x-[16px]'>
     <input className='rounded-[50%]' type="checkbox" />
    <p className='font-semibold text-[14px] leading-[20px]'>Create new ticket example</p>
        </div>
    <button className=' w-[54px] py-[5px] px-[12px] text-white bg-[#29CC97] rounded-[10px] text-[11px] leading-[13px] font-bold'>New</button>
    </div>
    <div className='flex items-center justify-between py-[10px] border-b-[1.5px]'>
        <div className='flex items-center space-x-[16px]'>
     <input className='rounded-[50%]' type="checkbox" />
    <p className='font-semibold text-[14px] leading-[20px]'>Update ticket report</p>
        </div>
    <button className='w-[74px] py-[5px] px-[12px] text-white rounded-[10px] bg-[#9FA2B4] text-[11px] leading-[13px] font-bold'>Default</button>
    </div>
</div>
  )
}

export default AllTasks