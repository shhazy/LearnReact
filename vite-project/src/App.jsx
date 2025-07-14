import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm'
import UserList from './UserList'
import R_Router from './ReactRouter'
import { BrowserRouter, Route, Routes } from 'react-router'
import React_Helmet from './ReactHelmet'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route index element={<R_Router />} /> 
       <Route path="/home" element={<R_Router />} /> 
       <Route path="/LoginForm" element={<LoginForm />} /> 
       <Route path="/user-list" element={<UserList />} /> 
       <Route path="/react-helmet" element={<React_Helmet />} /> 

      </Routes>
      </BrowserRouter>

      {/* <LoginForm />
      <UserList />
      <R_Router /> */}
    </>
  )
}

export default App
