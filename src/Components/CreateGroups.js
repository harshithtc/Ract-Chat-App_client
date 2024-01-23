import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

function CreateGroups() {
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={'createGroup-main-container'+((lightTheme)?"" : ' dark')}>
      <div className={'createGroup-container'+((lightTheme)?"" : ' dark')}>
        <input type="text" placeholder='Enter Group Name' className={''+((lightTheme)?"" : ' dark')}/>
        <IconButton >
        <DoneOutlineIcon className={''+((lightTheme)?"" : ' dark')}/>
        </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups
