import React from 'react'
import './MyStyles.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/live-chat.png'
function Users_Groups() {
  return (
    <div className='list-container'>
    <div className='online-users-container'>
        <img src={logo} alt="" className='online-users-logo'/>
        <p >Online Users</p>
 
    </div>

    <div className='sd-Search'> 
    <IconButton>
     <SearchIcon/>
     </IconButton>
     <input placeholder='Search' className='search-box'/>
    </div>
    <div className='online-list-container'>
    <div className='online-list'>
        <p className='con-icon'>T</p>
        <p className='online-list-title'>Test User</p>
    </div>
    <div className='online-list'>
        <p className='con-icon'>T</p>
        <p className='online-list-title'>Test User</p>
    </div>
    <div className='online-list'>
        <p className='con-icon'>T</p>
        <p className='online-list-title'>Test User</p>
    </div>
    <div className='online-list'>
        <p className='con-icon'>T</p>
        <p className='online-list-title'>Test User</p>
    </div>
    <div className='online-list'>
        <p className='con-icon'>T</p>
        <p className='online-list-title'>Test User</p>
    </div>
   
    </div>
    </div>
  )
}

export default Users_Groups
