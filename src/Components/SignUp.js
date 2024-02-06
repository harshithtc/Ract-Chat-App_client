import React, { useState } from 'react'
import './MyStyles.css'
import logo from '../images/live-chat.png'
import { Button, Snackbar, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert} from '@mui/material'
import Backdrop from '@mui/material/Backdrop';

import axios from 'axios';
function SignUp() {
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [errorOpen,setErrorOpen] = useState(false)
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

  const handleRegistration = (e) => {
    handleOpen()
    if (userName === "" || email === "" || password === "") {
      setError("Please fill all the fields.")
      setErrorOpen(true)
      handleClose()
      return
    }

    axios.post('http://localhost:5000/user/register', {
      name: userName,
      email,
      password,
    },//optional
    {
        headers:{"Content-type":"application/json",}
      }
    ).then((response) => {
      console.log(response)
      localStorage.setItem('userData', JSON.stringify(response.data))
      handleClose()
      navigate('/')
    }).catch((err) => {
      console.log(err.response)
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
      handleClose()

    })
    
  }

  return (
    <AnimatePresence>
      <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt="" className='welcome-logo' />
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ ease: "anticipate", duration: "0.3" }}
            className='login-box'>
            <p className='login-text'>Create your Account</p>
            <TextField
              id="user-name-signin"
              className='input-box-login'
              style={{ width: '60%' }}
              label="Enter user name"
              variant="outlined"
              color="secondary"
              name='user-name-signin'
              onChange={(e) => setUsername(e.target.value)} />

            <TextField
              id="email-signin"
              name='email-signin'
              className='input-box-login'
              style={{ width: '60%' }}
              label="Enter Email Address"
              type="email"
              variant="outlined"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)} />

            <TextField id="password-signin"
              className='input-box-login'
              style={{ width: '60%' }}
              type='password'
              label="Password"
              variant="outlined"
              color="secondary"
              onChange={(e) => setPassword(e.target.value)} />
            
              <Snackbar open={errorOpen} autoHideDuration={6000} anchorOrigin={{vertical:"top", horizontal:'center' }}  onClose={()=>{setErrorOpen(false)}}>
                  <Alert
                onClose={()=>{setErrorOpen(false)}}
                severity="error"
                variant="standard"
                sx={{ width: '100%' }}

                >
              {error}
              </Alert>
              </Snackbar>
            <Button variant="contained" style={{ backgroundColor: '#63d7b0' }} onClick={(e) => handleRegistration(e)}>SIGN UP</Button>
            <p className='link-text'>Already have an Acount ? <Link className='link' to={'/login'}> Login</Link> </p>
            <Backdrop
              sx={{ color: '#fff', borderRadius: "inherit",backgroundColor:'rgba(0,0,0,0.03)',backdropFilter:'blur(1px)'  , zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={() => handleClose()}
            >
              <CircularProgress color="inherit" />
            </Backdrop>

          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatePresence>
  )
}

export default SignUp
