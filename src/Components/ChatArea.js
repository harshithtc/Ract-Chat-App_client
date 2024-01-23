import React from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';

function ChatArea({props={name:'THAIR',timeStamp:'Online'}}) {
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className='chatArea-container'>
      <div className={'chatArea-header'+((lightTheme)?"" : ' dark')}>
        <div className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{props.name[0]}</div>
        <div className='header-text'>
        <p className={'con-title'+((lightTheme)?"" : ' dark')}>{props.name}</p>
        <p className={'con-timeStamp'+((lightTheme)?"" : ' dark')}>{props.timeStamp}</p>
        </div>
        <IconButton >
        <DeleteOutlineRoundedIcon className={''+((lightTheme)?"" : ' dark')}/>
        </IconButton>
      </div>
      <div className={'chatArea-messages'+((lightTheme)?"" : ' dark')}>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className={'chatArea-input'+((lightTheme)?"" : ' dark')}>
      <input type="text" placeholder='Type a message' className={''+((lightTheme)?"" : ' dark')} />
      <IconButton>
      <SendIcon className={''+((lightTheme)?"" : ' dark')}/>
      </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
