import React from 'react'

function MessageOthers() {
    var props2={name:'Random user',message:"This is a sample Message"}
  return (
    <div className='others-message-container'>
      <div className="conversation-container">
        <p className='con-icon'>{props2.name[0]}</p>
        <div className="other-text-container">
            <p className='con-title'>{props2.name}</p>
            <p className='con-lastMessage'>{props2.message}</p>
            <p className='other-timeStamp'>12:00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
