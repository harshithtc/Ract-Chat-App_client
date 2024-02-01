import React, { useEffect, useState } from 'react'
import './MyStyles.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import logo from '../images/live-chat.png'
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Users() {
    const [users,setUsers]=useState([])
    const lightTheme=useSelector((state)=>state.themeKey)
    const user=JSON.parse(localStorage.getItem('userData'))
    const navigate=useNavigate()
    if(!user){
        navigate('/')
    }
    console.log("User data ",user.token)
    useEffect(()=>{
        const config={
            headers: {
                Authorization:`Bearer ${user.token}`
            }
        }
        axios.get('http://localhost:5000/user/fethUsers',config).then((response)=>{
            console.log(response.data)
            setUsers(response.data)

        }).catch((err)=>{
                console.log(err)
        })
    },[])
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className='list-container'>
    <div className={'online-users-container'+((lightTheme)?"" : ' dark')}>
        <img src={logo} alt="" className='online-users-logo'/>
        <p >Online Users </p>
        <IconButton>
        <RefreshIcon className={'icon '+(lightTheme?"":"dark")}/>
        </IconButton>
 
    </div>

    <div className={'sd-Search'+((lightTheme)?"" : ' dark')}> 
    <IconButton>
     <SearchIcon className={''+((lightTheme)?"" : ' dark')}/>
     </IconButton>
     <input placeholder='Search' className={'search-box'+((lightTheme)?"" : ' dark')}/>
    </div>
    <div className={'online-list-container'+((lightTheme)?"" : ' dark')}>
    { users.map((user)=>{
        return(
            <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{user.name[0].toUpperCase()}</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>{user.name}</p>
            </motion.div>
        )
    })
    
    }
    </div>
    </motion.div>
    </AnimatePresence>

  )
}

export default Users
