import React from 'react'

function MessageSelf({ props }) {
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
       <p className='con-lastMessage' style={{color:'whitesmoke'}}>{props.content}</p> 
       <p className='self-time-stamp'>{`${new  Date(props.time).getHours()}:${new  Date(props.time).getMinutes()}`}</p>  
      </div>
      
    </div>
  )
}

export default MessageSelf
