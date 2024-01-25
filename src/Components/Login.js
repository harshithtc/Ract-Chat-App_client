import React from 'react'
import './MyStyles.css'
import logo from '../images/live-chat.png'
import { Button, TextField } from '@mui/material'
function Login() {
  return (
    <div className='login-container'>
    <div className='image-container'>
    <img src={logo} alt="" className='welcome-logo' />
    </div>
    <div className='login-box'>
        <p className='login-text'>Login to your Account</p>
        <TextField id="standard-basic" className='input-box-login' style={{width:'60%'}} label="Enter user name" variant="outlined"  />
        <TextField id="standard-basic" className='input-box-login' style={{width:'60%'}} type='password' label="Password" variant="outlined"  />
        <Button variant="contained" style={{backgroundColor:'#63d7b0'}} >Login</Button>
    </div>
    </div>
  )
}

export default Login
