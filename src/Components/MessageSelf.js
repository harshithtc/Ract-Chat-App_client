import React from 'react'

function MessageSelf({ props }) {
  const formattedTime = new Date(props.time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
       <p className='con-message' style={{color:'whitesmoke'}}>{props.content}</p> 
       <p className='self-time-stamp'>{formattedTime}</p>  
      </div>
      
    </div>
  )
}

export default MessageSelf
