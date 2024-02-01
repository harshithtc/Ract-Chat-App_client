import React from 'react'
import logo from '../images/live-chat.png'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from "framer-motion"
function Welcome() {
  const lightTheme=useSelector((state)=>state.themeKey)
  const user=JSON.parse(localStorage.getItem('userData'))
  return (
    <AnimatePresence>
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className={'welcome-container'+((lightTheme)?"" : ' dark')}>
     <img src={logo} alt="" className='welcome-logo' />
     <p style={{margin:'0 10px'}}> Hi🖐️ , {user.name}</p>
     <p >View and text directly to peaple presnt in the chat rooms</p>
     
    </motion.div>
    </AnimatePresence>
  )
}

export default Welcome
