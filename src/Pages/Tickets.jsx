import React from 'react'
import { FilterIcon, LeftIcon, LowIcon, RightIcon, SortIcon } from '../assets/images/icons'
import Table from '../components/Table'
import AvaImg from '../assets/images/5.png'
import Ava from '../assets/images/6.png'
import Bale from '../assets/images/bale.svg' 
import Robert from '../assets/images/robert.svg'
import Evans from '../assets/images/evans.svg'
import Smith from '../assets/images/smith.svg'
import Steve from '../assets/images/steve.svg'
import Cavil from '../assets/images/cavil.svg'

function Tickets() {
  return (
    <div> 
      <div className='flex items-center justify-between mb-[48px]'>
      <h3 className='text-[19px] leading-[23px] font-bold'>All Tickects</h3>
      <div className='flex items-center gap-[32px]'>
      <div className='flex items-center space-x-[8px]'>
      <SortIcon/>
      <p>Sort</p>
      </div>
      <div className='flex items-center space-x-[8px]'>
      <FilterIcon/>
      <p>Filter</p>
      </div>
      </div>
      </div>
      <ul className='flex justify-between items-center mb-[12px] border-b-2 pb-[12px]'>
        <li className='text-[#9FA2B4] w-[230px] text-[14px] leading-[17px] font-bold'>Ticket details</li>
        <li className='text-[#9FA2B4]  w-[230px] text-[14px] leading-[17px] font-bold'>Customer name</li>
        <li className='text-[#9FA2B4]  w-[200px] text-[14px] leading-[17px] font-bold'>Date</li>
        <li className='text-[#9FA2B4]  w-[200px] text-[14px] leading-[17px] font-bold'>Priority</li>
      </ul>
      <div className='space-y-6 mb-[24px]'>
      <Table title={"Contact Email not Linked"} update={"Updated 1 day ago"} name={"Tom Cruise"} date={"on 24.05.2019"} month={"May 26, 2019"} time={"6:30 PM"} level={"HOGH"} img={AvaImg} />
      <Table title={"Adding Images to Featured Posts"} update={"Updated 1 day ago"} name={"Matt Damon "} date={"on 24.05.2019"} month={"May 26, 2019"} time={"8:00 AM"} level={"LOW"} img={Ava}/>
      <Table title={"When will I be charged this month?"} update={"Updated 1 day ago"} name={"Robert Downey"} date={"on 24.05.2019"} month={"May 26, 2019"} time={"7:30 PM"} level={"HIGH"} img={Robert}/>
      <Table title={"Payment not going through"} update={"Updated 2 day ago"} name={"Christian Bale"} date={"on 24.05.2019"} month={"May 26, 2019"} time={"5:00 PM"} level={"NORMAL"} img={Bale}/>
      <Table title={"Unable to add replies"} update={"Updated 2 day ago"} name={"Henry Cavil"} date={"on 24.05.2019"} month={"May 26, 2019"} time={"4:00 PM"} level={"HIGH"} img={Cavil}/>
      <Table title={"Downtime since last week"} update={"Updated 3 day ago"} name={"Chris Evans"} date={"on 23.05.2019"} month={"May 26, 2019"} time={"2:00 PM"} level={"NORMAL"} img={Evans}/>
      <Table title={"Referral Bonus"} update={"Updated 4 day ago"} name={"Sam Smith"} date={"on 22.05.2019"} month={"May 26, 2019"} time={"11:30 PM"} level={"LOW"} img={Smith}/>
      <Table title={"How do I change my password?"} update={"Updated 6 day ago"} name={"Steve Rogers"} date={"on 21.05.2019"} month={"May 26, 2019"} time={"1:00 PM"} level={"NORMAL"} img={Steve}/>
      </div>
      <div className='flex space-x-[20px] items-center justify-end'>
        <div className='flex items-center gap-[4px]'>
        <p className='text-[#9FA2B4] text-[14px] leading-[20px]'>Rows per page:8</p>
        <LowIcon/>
        </div>
        <span className='text-[#9FA2B4] text-[14px] leading-[20px]'>1-8 of 1240</span>
        <div className='flex items-center space-x-[18px]'>
          <LeftIcon/>
          <RightIcon/>
        </div>
      </div>
    </div>

  )
}

export default Tickets