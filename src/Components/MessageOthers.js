import React from 'react'
import { useSelector } from 'react-redux'

function MessageOthers() {
  const lightTheme=useSelector((state=>state.themeKey))
    var props2={name:'Random user',message:"This is a sample Message"}
  return (
    <div className='others-message-container'>
      <div className="conversation-container-others">
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{props2.name[0]}</p>
        <div className={"other-text-container"+((lightTheme)?"" : ' dark-container')}>
            <p className={'con-title'+((lightTheme)?"" : ' dark-container')}>{props2.name}</p>
            <p className={'con-lastMessage'+((lightTheme)?"" : ' dark-container')}>{props2.message}</p>
            <p className={'other-timeStamp'+((lightTheme)?"" : ' dark-container')}>12:00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
