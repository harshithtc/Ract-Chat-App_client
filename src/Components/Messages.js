import React, { useState } from 'react'
import ConversationsItem from './ConversationsItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Messages() {
    const navigate=useNavigate()
    const lightTheme=useSelector((state)=>state.themeKey)
    
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
        ])
  return (
    <div>
    <div className='messages-container'>
    {       conversations.map((conversation)=>{
          return(<ConversationsItem props={conversation} key={conversation.name}  />)
       })
    }  
    </div>
    </div>
  )
}

export default Messages
