import React, { useEffect, useState } from 'react'
import './MyStyles.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import logo from '../images/live-chat.png'
import { useSelector,useDispatch } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { refresh } from '../Features/RefreshSlice';
function Users() {
    const [users,setUsers]=useState([])
    const lightTheme=useSelector((state)=>state.themeKey)
    const refreshField=useSelector((state)=>state.refreshKey)
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem('userData'))
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    //console.log("User data ",user.token)
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
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
    },[refreshField])
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
        <IconButton onClick={()=>{
            dispatch(refresh())
        }}>
        <RefreshIcon className={'icon '+(lightTheme?"":"dark")} />
        </IconButton>
 
    </div>

    <div className={'sd-Search'+((lightTheme)?"" : ' dark')}> 
    <IconButton>
     <SearchIcon className={''+((lightTheme)?"" : ' dark')}/>
     </IconButton>
     <input placeholder='Search' className={'search-box'+((lightTheme)?"" : ' dark')}/>
    </div>
    <div className={'online-list-container'+((lightTheme)?"" : ' dark')}>
    { users.map((userData,index)=>{
        return(
            <motion.div whileHover={{scale:1.01}} key={index} whileTap={{scale:0.99}} className={'online-list'+((lightTheme)?"" : ' dark')}
            onClick={(e)=>{
                console.log(userData)
                const config={
                    headers:{
                        Authorization:`Bearer ${user.token}`
                    }
                }
                axios.post('http://localhost:5000/chat',
                {
                    userId:userData._id,
                },
                config).then((response)=>{
                    console.log("Success")
                    console.log(response)
                    navigate(`/chat/${response.data._id}&${response.data.users[1].name}`)
                    dispatch(refresh())
                }).catch((err)=>{
                    console.log(err.message)
                })
            }}>
        <p className={'con-icon'+((lightTheme)?"" : ' dark-icon')}>{userData.name[0].toUpperCase()}</p>
        <p className={'online-list-title'+((lightTheme)?"" : ' dark')}>{userData.name}</p>
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
