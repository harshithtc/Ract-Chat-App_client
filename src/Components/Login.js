import React, { useState } from 'react'
import './MyStyles.css'
import logo from '../images/live-chat.png'
import { Button, Snackbar, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material'
import axios from 'axios';
import { useSelector } from 'react-redux';

function Login() {
  const lightTheme = useSelector((state) => state.themeKey)
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [errorOpen, setErrorOpen] = useState(false)
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  function extractErrorMessage(html) {
    const match = html.match(/<pre>Error: ([^<]+)<br>/);
    if (match && match.length > 1) {
      return match[1];
    }
    return "Unknown error";
  }
  const handleLogin = (e) => {
    setError("")
    setErrorOpen(false)
    console.log(userName, password)
    if (userName === "" || password === "") {
      setError('Please fill all fields')
      setErrorOpen(true)
    }
    else {
      handleOpen()
      axios.post('http://localhost:5000/user/login', {
        name: userName,
        password
      }).then((response) => {
        console.log(response.data)
        localStorage.setItem("userData", JSON.stringify(response.data))
        console.log("local storage data", localStorage.getItem('userData'))
        navigate('/')
        handleClose()
      }).catch((err) => {
        handleClose()
        if (err.response && err.response.data) {
          const errorMessage = extractErrorMessage(err.response.data);
          setError(errorMessage)
          setErrorOpen(true)
          console.log(errorMessage); // Log the error message
        } else {
          console.log('An error occurred:', err.message);
          setError('An error occurred')
          setErrorOpen(true)
        }


      })
    }


  }
  return (

    <div className={'login-container' + ((lightTheme) ? "" : " dark-container")}>
      <div className='image-container'>
        <img src={logo} alt="" className='welcome-logo' />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ ease: "anticipate", duration: "0.3" }}
          className={'login-box' + ((lightTheme) ? "" : " dark")}>
          <p className='login-text'>Login to your Account</p>
          <TextField
            id="user-name"
            className={'input-box-login' + ((lightTheme) ? "" : " dark")}
            style={{ width: '60%' }}
            label="Enter user name"
            variant="outlined"
            color="secondary"
            name='user-name'
            onChange={(e) => setUsername(e.target.value)} />
          <TextField
            id="password"
            className='input-box-login'
            style={{ width: '60%' }}
            type='password'
            label="Password"
            variant="outlined"
            color="secondary"
            name='password'
            onChange={(e) => { setPassword(e.target.value) }} />

          <Snackbar open={errorOpen} autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: 'center' }} onClose={() => { setErrorOpen(false) }}>
            <Alert
              onClose={() => { setErrorOpen(false) }}
              severity="error"
              variant="standard"
              sx={{ width: '100%' }} >
              {error}
            </Alert>
          </Snackbar>

          <Button
            variant="contained"
            style={{ backgroundColor: '#63d7b0' }} onClick={(e) => handleLogin(e)}>LOGIN </Button>
          <p className='link-text'>Don't have an Acoount ? <Link className='link' to={'/signup'}>Sign Up</Link></p>
          <Backdrop
            sx={{ color: '#fff', borderRadius: "inherit", backgroundColor: 'rgba(0,0,0,0.03)', backdropFilter: 'blur(1px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="secondary" />
          </Backdrop>

        </motion.div>
      </AnimatePresence>
    </div>

  )
}

export default Login
