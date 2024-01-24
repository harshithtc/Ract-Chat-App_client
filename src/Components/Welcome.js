import React from 'react'
import logo from '../images/live-chat.png'
import { useSelector } from 'react-redux'

function Welcome() {
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={'welcome-container'+((lightTheme)?"" : ' dark')}>
     <img src={logo} alt="" className='welcome-logo' />
     <p style={{margin:'10px'}}>View and text directly to peaple presnt in the chat rooms</p>
    </div>
  )
}

export default Welcome
