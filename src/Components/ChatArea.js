import React, { useEffect, useRef, useState } from 'react'
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
import Skeleton from "@mui/material/Skeleton";
//socket  
import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:5000/"
var socket
function ChatArea({ props = { name: 'THAIR', timeStamp: 'Online' } }) {
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false)
  const lightTheme = useSelector((state) => state.themeKey)
  const dispatch = useDispatch()
  const refreshHandle = useSelector((state) => state.refreshKey)
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])
  const [allMessagesCopy, setAllMessagesCopy] = useState([])
  const chatParams = useParams()
  const user = JSON.parse(localStorage.getItem('userData'))
  const [chatId, userName] = chatParams._id.split("&")
  const [loading, setLoading] = useState(true)
  const chatAreaRef = useRef(null);
  console.log(chatId, userName)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  const sendMessage = () => {
    if (!message.trim()) return; // Do not send empty messages
    axios
      .post('http://localhost:5000/message', {
        content: message,
        chatId: chatId,
      }, config)
      .then((response) => {
        const data = response.data;
        socket.emit('new message', data);
        setMessage('');
        dispatch(refresh(true))
      })
      .catch((err) => {
        console.error(err.message);
      })
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup', user);
    socket.on('connected', () => {
      console.log('Connected to socket');
      setSocketConnectionStatus(!socketConnectionStatus);
    });
  }, []);

  useEffect(() => {
    socket.on("message recieved", (newMessage) => {
      if(chatId==newMessage.chat._id){
        setAllMessages([...allMessages],newMessage)
      }
       dispatch(refresh(true))
     
    })
    return () => socket.off(["message recieved"])
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:5000/message/${chatId}`, config).then((response) => {
      setAllMessages(response.data)
      setLoading(false)
      socket.emit("join chat", chatId)
    }).catch(err => console.error(err))

    setAllMessagesCopy(allMessages)
  }, [refreshHandle])

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [allMessages]);

  const deleteConversation = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios.post("http://localhost:5000/message/deleteMessages",{chatId:chatId}, config).then((response)=>{
      console.log(response)
      navigator(1)
      dispatch(refresh())
    }).catch((err)=>console.log(err))
  }

    if(loading){
      return (
        <div
          style={{
            border: "20px",
            padding: "10px",
            width: "100%",
            display: "flex",
            flex:'1',
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton
            animation='wave'
            variant="rectangular"
            sx={{ width: "100%", borderRadius: "20px" }}
            height={60}
          />
          <Skeleton
            animation='wave'
            variant="rectangular"
            sx={{
              width: "100%",
              borderRadius: "20px",
              flexGrow: "1",
            }}
          />
          <Skeleton
            animation='wave'
            variant="rectangular"
            sx={{ width: "100%", borderRadius: "20px" }}
            height={60}
          />
        </div>
      );
    }else{
  return (

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className={'chatArea-container'+((lightTheme) ? " " : " dark")}>
        <div className={'chatArea-header' + ((lightTheme) ? "" : ' dark')}>
          <div className={'con-icon' + ((lightTheme) ? "" : ' dark-icon')}>{userName[0].toUpperCase()}</div>
          <div className='header-text'>
            <p className={'con-title' + ((lightTheme) ? "" : ' dark')}>{userName}</p>
            <p className={'con-timeStamp' + ((lightTheme) ? "" : ' dark')}>{props.timeStamp}</p>
          </div>
          <IconButton onClick={deleteConversation}>
            <DeleteOutlineRoundedIcon className={'' + ((lightTheme) ? "" : ' dark')} />
          </IconButton>
        </div>
        <div ref={chatAreaRef} className={'chatArea-messages' + ((lightTheme) ? "" : ' dark')}>

          {
            allMessages.reverse().map((data, index) => {
              <p>{data.date}</p>
              if (data.sender._id == user._id) {
                return <MessageSelf props={data} />
              }
              else {
                return <MessageOthers props={data} />
              }
            })
          }

        </div>
        <div className={'chatArea-input' + ((lightTheme) ? "" : ' dark')}>
          <input type="text" placeholder='Type a message' onChange={(e) => setMessage(e.target.value)} value={message} className={'' + ((lightTheme) ? "" : ' dark')}

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage()

              }
            }} />
          <IconButton onClick={() => {
            sendMessage()
          }}>
            <SendIcon className={'' + ((lightTheme) ? "" : ' dark')} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
}

export default ChatArea
