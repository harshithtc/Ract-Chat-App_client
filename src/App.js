import React, { useEffect } from "react";
import './App.css'
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import CreateGroups from "./Components/CreateGroups";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
import ConversationsItem from "./Components/ConversationsItem";
import SignUp from "./Components/SignUp";
import { useSelector } from "react-redux";
import Messages from "./Components/Messages";
function App() {
  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem('userData'))
  useEffect(()=>{ 
      if(!user){
        navigate('/login')
    }
  },[])
  
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={'App'+((lightTheme)?" ":" darkk")}>
    <Routes>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/" element={<MainContainer/>}>  
        <Route path="" element={<Welcome/>}></Route>
        <Route path="chat/:_id" element={<ChatArea/>}></Route>
        <Route path="users" element={<Users/>}></Route>
        <Route path="groups" element={<Groups/>}></Route>
        <Route path="create-groups" element={<CreateGroups/>}></Route>
        <Route path="messages" element={<Messages/>}></Route>
       
      </Route>
    </Routes>
   
    </div>
  )
}

export default App;
