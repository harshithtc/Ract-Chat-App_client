import React, {useState } from 'react'
import './MyStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
function SideBar() {
   const [conversations,setConversations]=useState(
      [
         {
            name:'Thahir',
            lastMessage:'Hello',
            timeStamp:"Today"
         },
         {
            name:'Anshad PM',
            lastMessage:'Endada',
            timeStamp:"9-1-2024"
         }, 
         {
            name:'Harshith BCA',
            lastMessage:'Ha Pariya',
            timeStamp:"yesturday"
         },
         {
            name:'Anshad PM',
            lastMessage:'Endada',
            timeStamp:"9-1-2024"
         }, 
         {
            name:'Harshith BCA',
            lastMessage:'Ha Pariya',
            timeStamp:"yesturday"
         },
         {
            name:'Anshad PM',
            lastMessage:'Endada',
            timeStamp:"9-1-2024"
         }, 
         {
            name:'Harshith BCA',
            lastMessage:'Ha Pariya',
            timeStamp:"yesturday"
         },
      ]
   )
  return (
    <div className='sidebar-container'>
     <div className='sd-header'>
     <div>
     <IconButton>
        <AccountCircleIcon/>
     </IconButton>
     </div>
      <div>
     <IconButton>
        <PersonAddIcon/>
     </IconButton>
     <IconButton>
        <GroupAddIcon/>
     </IconButton>
     <IconButton>
        <AddCircleOutlinedIcon/>
     </IconButton>
     <IconButton>
        <DarkModeIcon/>
     </IconButton>
     </div>
     </div>
     <div className='sd-Search'> 
     <IconButton>
      <SearchIcon/>
      </IconButton>
      <input placeholder='Search' className='search-box'/>
     </div>
      <div className='sd-conversation'>
      {
         conversations.map((conversation)=>{
            return(<ConversationsItem props={conversation} key={conversation.name}/>)
         })
      } 
   
      </div>
    </div>
  )
}

export default SideBar
