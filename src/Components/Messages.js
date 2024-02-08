import React, { useEffect, useState } from 'react'
import ConversationsItem from './ConversationsItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AnimatePresence,motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'

function Messages() {
  const [mobileOrientation, setMobileOrientaion] = useState(false)
  const navigate=useNavigate()
   useEffect(() => {
      const handleView = () => {
         if(window.innerWidth >687)
            navigate('/')
         setMobileOrientaion(window.innerWidth <=687)
      }
      handleView()
      window.addEventListener('resize', handleView)
      return () => {
         window.removeEventListener('resize', handleView)
      }
   }, [mobileOrientation])
    
    const lightTheme=useSelector((state)=>state.themeKey)
    const user=JSON.parse(localStorage.getItem('userData'))
    const [conversations,setConversations]=useState([])
    const refreshField=useSelector((state)=>state.refreshKey)
    
    useEffect(()=>{
      if(!user){
        navigate('/login')
      }
      else{
        const config={
          headers:{
              Authorization:`Bearer ${user.token}`
          }
      }
          axios.get('http://localhost:5000/chat/',config).then((response)=>{
             console.log(response)
             setConversations(response.data)   
          }).catch((err)=>{
             console.log(err.messag)
          })
      }        
        
    },[refreshField])
    
  return (
    <AnimatePresence>
    <div >
    {mobileOrientation && <div className={"sd-Search " + ((lightTheme) ? " " : " dark")}>
    <IconButton>
       <SearchIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
    </IconButton>
    <input placeholder='Search' className={"search-box " + ((lightTheme) ? " " : " dark")} />
 </div>}


    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className='messages-container'>
    {       conversations.map((conversation,index)=>{
          return(<ConversationsItem props={conversation} key={index}  />)
       })
    }  
    </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default Messages
