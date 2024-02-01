import React, {useEffect, useState } from 'react'
import './MyStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ChatIcon from '@mui/icons-material/Chat';
import Messages from './Messages';
function SideBar() {
   const lightThemse=useSelector((state)=>state.themeKey)
   const [mobileOrientation,setMobileOrientaion]=useState(false)
   const [login,setLogin]=useState(true)
   useEffect(()=>{
      const handleView=()=>{
         setMobileOrientaion(window.innerWidth<687)
      }
      handleView()
      window.addEventListener('resize',handleView)
      return ()=>{
         window.removeEventListener('resize',handleView)
      }
   },[])
   
   const handleLogout=()=>{
      localStorage.removeItem("userDetails")
      setLogin(false)
   }
  const dispatch= useDispatch()
   const [conversations,setConversations]=useState(
      [
         {
            name:'Thahir',
            lastMessage:'Hello',
            timeStamp:"Today"
         },
         {
            name:'Anshad',
            lastMessage:'Hi',
            timeStamp:"Yesturday"
         }, 
         {
            name:'Harshith',
            lastMessage:'Good Morning🌅',
            timeStamp:"yesturday"
         },
         {
            name:'Deekshith',
            lastMessage:'Hello',
            timeStamp:"19-1-2024"
         }, 
         {
            name:'Prajwal',
            lastMessage:'Hi',
            timeStamp:"18-1-2024"
         }
      ]
   )
   const navigate=useNavigate()
  return (
    <div className='sidebar-container'>
     <div className={"sd-header "+((lightThemse)?" ":" dark")}>
     <div>
     <IconButton onClick={()=>navigate('/')}>
        <AccountCircleIcon className={"icon"+((lightThemse)?"":" dark")}/>
     </IconButton>
     </div>
      <div className='inner-icon'>
      {
         mobileOrientation && <IconButton onClick={()=>navigate('messages')}><ChatIcon className={"icon"+((lightThemse)?"":" dark")} /></IconButton>
      }
     <IconButton onClick={()=>navigate('users')}>
        <PersonAddIcon className={"icon"+((lightThemse)?"":" dark")}/>
     </IconButton>
     <IconButton onClick={()=>navigate('groups')}>
        <GroupAddIcon className={"icon"+((lightThemse)?"":" dark")}/>
     </IconButton>
     <IconButton onClick={()=>navigate('create-groups')}>
        <AddCircleOutlinedIcon className={"icon"+((lightThemse)?"":" dark")}/>
     </IconButton>

     <IconButton onClick={()=>{dispatch(toggleTheme())}} >
      {lightThemse && <NightlightIcon className="icon"/> }
      {!lightThemse && <LightModeIcon className={"icon"+((lightThemse)?"":" dark")}/>}
     </IconButton>
     <IconButton onClick={handleLogout}>
     <LogoutRoundedIcon className={"icon"+((lightThemse)?"":" dark")}/>
     </IconButton>

     </div>
     </div>
     <div className={"sd-Search "+((lightThemse)?" ":" dark")}> 
     <IconButton>
      <SearchIcon className={"icon"+((lightThemse)?"":" dark")} />
      </IconButton>
      <input placeholder='Search' className={"search-box "+((lightThemse)?" ":" dark")}/>
     </div>
     <div className={"sd-conversation "+((lightThemse)?" ":" dark")}>
         <Messages/>
      </div>
    </div>
  )
}

export default SideBar
