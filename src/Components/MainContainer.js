import React from 'react'
import './MyStyles.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'

function MainContainer() {
  return (
    <div className='Main'>
      <SideBar/>
      <ChatArea/>
    </div>
  )
}

export default MainContainer
