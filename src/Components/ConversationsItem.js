import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './MyStyles.css'

function ConversationsItem({ props }) {
  const lightTheme = useSelector((state) => state.themeKey)
  const user = JSON.parse(localStorage.getItem('userD'))
  const navigate = useNavigate()
  return (
    <div className='conversation-container' onClick={() => { navigate(`/chat/${props._id}&${props.users[1].name}`) }}>
      <p className={'con-icon' + ((lightTheme) ? "" : ' dark-icon')}>{props.users[1].name[0].toUpperCase()}</p>
      <p className={'con-title' + ((lightTheme) ? "" : ' dark')}>{props.users[1].name}</p>
      <p className={'con-lastMessage' + ((lightTheme) ? "" : ' dark')}>{props.lastMessage ? props.lastMessage : "Hi,\n how are you can i meet u"}</p>
      <p className={'con-timeStamp' + ((lightTheme) ? "" : ' dark')}>{new Date(props.time).toDateString()}</p>

    </div>

  )
}

export default ConversationsItem
