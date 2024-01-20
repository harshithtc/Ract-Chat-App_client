import React from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea({props={name:'THAIR',timeStamp:'Online'}}) {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <div className='con-icon'>{props.name[0]}</div>
        <div className='header-text'>
        <p className='con-title'>{props.name}</p>
        <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton >
        <DeleteOutlineRoundedIcon/>
        </IconButton>
      </div>
      <div className='chatArea-messages'>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className='chatArea-input'>
      <input type="text" placeholder='Type a message' />
      <IconButton>
      <SendIcon/>
      </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
