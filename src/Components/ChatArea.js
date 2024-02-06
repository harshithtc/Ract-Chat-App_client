import React from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
import { useParams } from 'react-router-dom';
function ChatArea({props={name:'THAIR',timeStamp:'Online'}}) {
  const lightTheme=useSelector((state)=>state.themeKey)
  const chatParams=useParams()
  const [chatId,userName]=chatParams._id.split("&")
  console.log(chatId,userName)
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className='chatArea-container'>
      <div className={'chatArea-header'+((lightTheme)?"" : ' dark')}>
        <div className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{userName[0].toUpperCase()}</div>
        <div className='header-text'>
        <p className={'con-title'+((lightTheme)?"" : ' dark')}>{userName}</p>
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
    </motion.div>
    </AnimatePresence>
  )
}

export default ChatArea
