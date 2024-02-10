import React, { useEffect, useState } from 'react'
import ConversationsItem from './ConversationsItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AnimatePresence,motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
function Messages() {
  const [mobileOrientation, setMobileOrientaion] = useState(false)
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate()
  var style={
   padding: mobileOrientation ? '10px' : '0',
   display: 'flex',
 // Corrected spelling
   flex: '1',
   justifyContent: 'space-between',
   flexDirection: 'column',
   paddingTop: '10px',
   overflowY: 'scroll', // Changed to 'auto' for scrolling only when necessary
   boxShadow: mobileOrientation ? 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' : '',
   backgroundColor: 'white',
   gap: '1.3rem',
   width: '100%', // Ensure full width
   height: '100%', // Ensure full height
   boxSizing: 'border-box', // E
  }
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
             let data=[...response.data]
             data.sort((a,b)=>(new Date(b.date)- new Date(a.date)))
             setConversations(data)
             setLoading(false)   
          }).catch((err)=>{
             console.log(err.messag)
          })
      }        
        
    },[refreshField])
    
  return (
    <AnimatePresence >
    <div style={{overflow:'hidden'}}>
    {mobileOrientation && <div style={{display:'flex',width:'87vw'}} className={"sd-Search " + ((lightTheme) ? " " : " dark")}>
    <IconButton>
       <SearchIcon className={"icon" + ((lightTheme) ? "" : " dark")} />
    </IconButton>
    <input placeholder='Search' className={"search-box " + ((lightTheme) ? " " : " dark")} />
 </div>}
   {loading?(
      <div style={style} className='loader'>
      <div
      style={{
        display: "flex",
        justifyContent:"space-around",
        flexDirection: "row",
        gap: "5px",
       
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
    </div>


    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>


    <div
    style={{
      border: "20px",
      padding: "0px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      gap: "5px",
    }}
  >
  <Skeleton variant="circular" width={48} height={48} />

    <Skeleton
      variant="rectangular"  height={48}
      sx={{
        borderRadius: "20px",
        flexGrow: "1",
      }}
    />
    
  </div>


  <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>


    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>
    <div
      style={{
        border: "20px",
        padding: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
    <Skeleton variant="circular" width={48} height={48} />

      <Skeleton
        variant="rectangular"  height={48}
        sx={{
          borderRadius: "20px",
          flexGrow: "1",
        }}
      />
      
    </div>

    </div>
   ):(

   <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    style={{boxSizing:'border-box',height:'max',width:'inherit'}}
    className='messages-container'>
    {       conversations.map((conversation,index)=>{
          return(<ConversationsItem props={conversation} key={index}  />)
       })
    }  
    </motion.div>

   )}

    
    </div>
    </AnimatePresence>
  )
}

export default Messages
