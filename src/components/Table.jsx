import React from 'react'

function Table({title,update,name,date,month,time,level,img}) {
  return (
    <div className='flex items-center border-b-2  '>
      <img src={img} alt="AvaImg" width={44} height={44} className='mb-[12px]' />
      <div className='pl-[24px] w-[230px] '>
      <h4 className='text-[14px] leading-[20px] font-semibold'>{title}</h4>
      <span className='text-[#C5C7CD] text-[12px] leading-4'>{update}</span>
      </div>
      <div className='w-[255px]'>
        <p className='text-[14px] leading-[20px] font-semibold'>{name}</p>
        <span className='text-[#C5C7CD] text-[12px] leading-4'>{date}</span>
      </div>
      <div className='w-[200px] mr-[33px]' >
        <p className='text-[14px] leading-[20px] font-semibold'>{month}</p>
        <span className='text-[#C5C7CD] text-[12px] leading-4'>{time}</span>
      </div>
      <button className='px-[3px] w-[74px] text-white rounded-md  bg-[#F12B2C]'>{level}</button>
      </div>
  )
}

export default Table