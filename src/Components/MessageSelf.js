import React from 'react'

function MessageSelf() {
    var props1={name:'You',message:"This is a sample Message"}
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
       <p className='con-lastMessage'>{props1.message}</p> 
       <p className='self-time-stamp'> 12:00am</p>
      </div>
      
    </div>
  )
}

export default MessageSelf
