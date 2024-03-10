import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './MyStyles.css'
import { refresh } from '../Features/RefreshSlice'

function ConversationsItem({ props }) {
  const lightTheme = useSelector((state) => state.themeKey)
  const dispatch=useDispatch()
  const user = JSON.parse(localStorage.getItem('userData'))
  const navigate = useNavigate()
  
  let Name
  if(props.isGroupChat){
    Name=props.chatName
  }else{
    props.users.map((data)=>{
      if(data._id!=user._id){
        Name=data.name;
      }
    })
  }
  return (
    <div className={'conversation-container'+((lightTheme) ? " " : " dark")} onClick={() => { 
      
      navigate(`/chat/${props._id}&${Name}`)
      dispatch(refresh())
    }}>
      <p className={'con-icon' + ((lightTheme) ? "" : ' dark-icon')} >{Name[0].toUpperCase()}</p>
      <p className={'con-title' + ((lightTheme) ? "" : ' dark')}>{Name}</p>
      <p className={'con-lastMessage' + ((lightTheme) ? "" : ' dark')} >{props.latestMessage? props.latestMessage.content : "No Messages yet, click to start conversation "}</p>
      <p className={'con-timeStamp' + ((lightTheme) ? "" : ' dark')} >{(new Date(props.time).getDate()===new Date().getDate() && new Date(props.time).getMonth()===new Date().getMonth() && new Date(props.time).getFullYear()===new Date().getFullYear())?`Today ${new Date(props.time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })}`:new Date(props.time).toLocaleDateString("en-IN",{
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).replace(/\s+/g, '-')}</p>

    </div>

  )
}

export default ConversationsItem
