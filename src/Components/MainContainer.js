import React from 'react'
import './MyStyles.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import Users_Groups from './Users_Groups'
import Users from './Users'
import Groups from './Groups'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



function MainContainer() {
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={'Main'+((lightTheme)?"" : ' dark-container')}>
      <SideBar/>
      <Outlet/>
      {/*<Welcome/>*/}
      {/*<ChatArea/>*/}
      {/*<CreateGroups/>*/}
      {/*<Users/>*/}
      {/*<Groups/>*/}
    </div>
  )
}

export default MainContainer
