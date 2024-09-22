import React from 'react'
import Frames from '../components/Frames'
import Section from '../components/Section'
import Statistic from '../components/Statistic'
import Details from '../components/Details'
import AllTasks from '../components/AllTasks'

function Agents() {
  return (
    <>
    <div className='flex items-center space-x-[30px]'>
    <Frames title={"Unresolved"} number={"60"}/>
    <Frames title={"Overdue"} number={"16"}/>
    <Frames title={"Open"} number={"43"}/>
    <Frames title={"On hold"} number={"64"}/>
    </div>
    <div className='bg-[#FFFFFF] h-[448px] mb-[30px] flex'>
    <div >
    <Section/>
    </div>
    <div>
    <Statistic title={"Resolved"} count={"449"}/>
    <Statistic title={"Received"} count={"426"}/>
    <Statistic title={"Average first response time"} count={"33m"}/>
    <Statistic title={"Average response timeed"} count={"3h 8m"}/>
    <Statistic title={"Resolution within SLA"} count={"94%"}/>
    </div>
    </div>
    <div className='flex items-center gap-[30px]'>
    <Details/>
    <AllTasks/>
    </div>
    </>
  )
}

export default Agents