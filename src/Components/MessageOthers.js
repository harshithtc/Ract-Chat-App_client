import React from 'react'
import { useSelector } from 'react-redux'

function MessageOthers({props}) {
  const lightTheme=useSelector((state=>state.themeKey))
  return (
    <div className='others-message-container'>
      <div className="conversation-container-others">
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{props.sender.name[0].toUpperCase()}</p>
        <div className={"other-text-container"+((lightTheme)?"" : ' dark-container')}>
            <p className={'con-title'+((lightTheme)?"" : ' dark-container')}>{props.sender.name}</p>
            <p className={'con-lastMessage'+((lightTheme)?"" : ' dark-container')}>{props.content}</p>
            <p className={'other-timeStamp'+((lightTheme)?"" : ' dark-container')}>{`${new  Date(props.time).getHours()}:${new  Date(props.time).getMinutes()}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
