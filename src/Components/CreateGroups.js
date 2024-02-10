import React, { useEffect, useState } from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"

import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';

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
  const lightTheme = useSelector((state) => state.themeKey)
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState(null);
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [users, setUsers] = useState([])
  const refreshField = useSelector((state) => state.refreshKey)
  const [addUsers,setAddUsers]=useState([user._id])
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios.get('http://localhost:5000/user/fethUsers', config).then((response) => {
      console.log(response.data)
      setUsers(response.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [refreshField])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateGroup = () => {
    if (!user)
      navigate('/login')
    console.log(user)
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios.post('http://localhost:5000/chat/createGroup', {
      name: groupName,
      users: addUsers
    },
      config)
      .then((response) => {
        console.log(response)
        dispatch(refresh(true))

      })
      .catch(err => { console.log(err) })
    setGroupName("")

  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className={'createGroup-main-container' + ((lightTheme) ? "" : ' dark')}>
        <div>
        <div className={'createGroup-container' + ((lightTheme) ? "" : ' dark')}>
          <input type="text"  placeholder='Enter Group Name'
            onChange={(e) => {
              setGroupName(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                setOpen(true)
              }
            }}
            value={groupName}
            className={'' + ((lightTheme) ? "" : ' dark')} />
          <IconButton onClick={() => {
            setOpen(true)
          }}>
            <DoneOutlineIcon className={'' + ((lightTheme) ? "" : ' dark')} />
          </IconButton>
        </div>
        </div>


        <div style={{margin:0,marginBottom:"10px",padding:"5px"}} className={'sd-Search'+((lightTheme)?"" : ' dark')}> 
        <IconButton>
         <SearchIcon className={''+((lightTheme)?"" : ' dark')}/>
         </IconButton>
         <input placeholder='Search' className={'search-box'+((lightTheme)?"" : ' dark')}/>
        </div>
        <div className={'online-list-container' + ((lightTheme) ? "" : ' dark')}>
        {users.map((user, index) => {
          return (
            <motion.div whileHover={{ scale: 1.01 }} className={'online-list' + ((lightTheme) ? "" : ' dark')}>
              <p className={'con-icon' + ((lightTheme) ? "" : ' dark-icon')}>{user.name[0].toUpperCase()}</p>
              <p className={'online-list-title' + ((lightTheme) ? "" : ' dark')}>{user.name}</p>
              <LoadingButton loading={false} style={{ color: "#63d7b0", marginLeft: "auto" }} onClick={() => {

                if(!addUsers.includes(user._id)){
                    setAddUsers((previos)=>[...previos, user._id])
                }

              }}>ADD</LoadingButton>
            </motion.div>
          )
        })

        }
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
          <Button onClick={() => {
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
