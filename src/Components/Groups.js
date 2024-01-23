import React from 'react'
import './MyStyles.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/live-chat.png'
import { useSelector } from 'react-redux';
function Groups() {
    const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className='list-container'>
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
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </div>
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
    <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
    <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </div>
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
    <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
    <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </div>
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
    <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
    <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </div>
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
    <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
    <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
    </div>
    <div className={'online-list'+((lightTheme)?"" : ' dark')}>
    <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>T</p>
    <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>Test User</p>
</div>
    </div>
    </div>
  
  )
}

export default Groups
