import React, { useEffect, useState } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { refresh } from '../Features/RefreshSlice';
function ChatArea({ props = { name: 'THAIR', timeStamp: 'Online' } }) {
  const lightTheme = useSelector((state) => state.themeKey)
  const dispatch=useDispatch()
  const refreshHandle=useSelector((state)=>state.refreshKey)
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])
  const chatParams = useParams()
  const user=JSON.parse(localStorage.getItem('userData'))
  const [chatId, userName] = chatParams._id.split("&")
  console.log(chatId, userName)
  const config={
    headers:{
      Authorization:`Bearer ${user.token}`
    }
  }
  useEffect(()=>{
    axios.get(`http://localhost:5000/message/${chatId}`,config).then((response)=>{
      console.log(response.data)
      setAllMessages(response.data)
    }).catch(err=>console.error(err))
  },[refreshHandle])


  const sendMessage=()=>{
    
    axios.post('http://localhost:5000/message',{
      content: message,
      chatId:chatId,
    },config).then((response)=>{
      console.log(response)
      setMessage('');
      dispatch(refresh())
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className='chatArea-container'>
        <div className={'chatArea-header' + ((lightTheme) ? "" : ' dark')}>
          <div className={'con-icon' + ((lightTheme) ? "" : ' dark-icon')}>{userName[0].toUpperCase()}</div>
          <div className='header-text'>
            <p className={'con-title' + ((lightTheme) ? "" : ' dark')}>{userName}</p>
            <p className={'con-timeStamp' + ((lightTheme) ? "" : ' dark')}>{props.timeStamp}</p>
          </div>
          <IconButton >
            <DeleteOutlineRoundedIcon className={'' + ((lightTheme) ? "" : ' dark')} />
          </IconButton>
        </div>
        <div className={'chatArea-messages' + ((lightTheme) ? "" : ' dark')}>

          {
            allMessages.reverse().map((data,index)=>{
              if(data.sender._id==user._id){
                return <MessageSelf props={data}/>
              }
              else{
                return <MessageOthers props={data} />
              }
            })
          }

        </div>
        <div className={'chatArea-input' + ((lightTheme) ? "" : ' dark')}>
          <input type="text" placeholder='Type a message' onChange={(e) => setMessage(e.target.value)} value={message} className={'' + ((lightTheme) ? "" : ' dark')}
          
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              sendMessage()

            }
          }}/>
          <IconButton onClick={()=>{
            sendMessage()
          }}>
            <SendIcon className={'' + ((lightTheme) ? "" : ' dark')} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ChatArea
