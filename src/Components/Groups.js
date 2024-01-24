import React from 'react'
import './MyStyles.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/live-chat.png'
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
function Groups() {
    const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className='list-container'>
    <div className={'online-users-container'+((lightTheme)?"" : ' dark')}>
        <img src={logo} alt="" className='online-users-logo'/>
        <p >Available Groups</p>
 
    </div>

    <div className={'sd-Search'+((lightTheme)?"" : ' dark')}> 
    <IconButton>
     <SearchIcon className={''+((lightTheme)?"" : ' dark')}/>
     </IconButton>
     <input placeholder='Search' className={'search-box'+((lightTheme)?"" : ' dark')}/>
    </div>
    <div className={'online-list-container'+((lightTheme)?"" : ' dark')}>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </motion.div>
    </div>
    </motion.div>
    </AnimatePresence>

  
  )
}

export default Groups
