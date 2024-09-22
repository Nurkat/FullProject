import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Overview,Ideas, Tickets, Contacts, Agents, Articles, Settings, Subscription } from '../Pages'
import Header from '../components/Header'


function Routers() {
  return (
    <div className='w-[80%] p-[30px]'>
      <Header/>
  <Routes>
  <Route path='/' element={<Overview/>}/>
  <Route path='/tickets' element={<Tickets/>}/>
  <Route path='/ideas' element={<Ideas/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  <Route path='/agents' element={<Agents/>}/>
  <Route path='/articles' element={<Articles/>}/>
  <Route path='/settings' element={<Settings/>}/>
  <Route path='/subscriptions' element={<Subscription/>}/>
  <Route path='*' element={<h1>Not Found Page</h1>}/>
  </Routes>
    </div>
  )
}

export default Routers 