import React, { useState } from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { refresh } from '../Features/RefreshSlice';

function CreateGroups() {
  const lightTheme=useSelector((state)=>state.themeKey)
  const dispatch=useDispatch()
  const [groupName,setGroupName]=useState(null);
  const user=JSON.parse(localStorage.getItem("userData"));
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateGroup=()=>{
    if(!user)
          navigate('/login')
        console.log(user)
        const config={
          headers:{
            Authorization:`Bearer ${user.token}`
          }
        }
        axios.post('http://localhost:5000/chat/createGroup',{
          name:groupName,
          users:[user._id]
        },
        config)
        .then((response)=>{
          console.log(response)
          dispatch(refresh(true))
          
        })
        .catch(err => {console.log(err)})
        setGroupName("")

  }

  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}}
    className={'createGroup-main-container'+((lightTheme)?"" : ' dark')}>
      <div className={'createGroup-container'+((lightTheme)?"" : ' dark')}>
        <input type="text" placeholder='Enter Group Name'
        onChange={(e)=>{
          setGroupName(e.target.value)
        }}
        onKeyDown={(e)=>{
          if(e.key=='Enter'){
           setOpen(true)
          }
        }}
        value={groupName}
        className={''+((lightTheme)?"" : ' dark')}/>
        <IconButton onClick={()=>{
            setOpen(true)
        }}>
        <DoneOutlineIcon className={''+((lightTheme)?"" : ' dark')}/>
        </IconButton>
      </div>
    </motion.div>


    <Dialog
    
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">
      {""}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
       Are you sure, you want to create  a group with the name "{groupName}"?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose}>
        No
      </Button>
      <Button onClick={()=>{
        handleClose()
        handleCreateGroup()
        dispatch(refresh())
        
      }} autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>

    </AnimatePresence>
  )
}

export default CreateGroups
