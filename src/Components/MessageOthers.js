import React from 'react'
import { useSelector } from 'react-redux'

function MessageOthers({props}) {
  const lightTheme=useSelector((state=>state.themeKey))
  const formattedTime = new Date(props.time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  return (
    <div className='others-message-container'>
      <div className="conversation-container-others">
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{props.sender.name[0].toUpperCase()}</p>
        <div className={"other-text-container"+((lightTheme)?"" : ' dark-container')}>
            <p className={'con-title'+((lightTheme)?"" : ' dark-container')}>{props.sender.name}</p>
            <p className={'con-message'+((lightTheme)?"" : ' dark-container')}>{props.content}</p>
            <p className={'other-timeStamp'+((lightTheme)?"" : ' dark-container')}>{formattedTime}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
