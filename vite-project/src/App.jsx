import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm'
import UserList from './UserList'
import R_Router from './ReactRouter'
import { BrowserRouter, Route, Routes } from 'react-router'
import React_Helmet from './ReactHelmet'
import ExpressReact from './ExpressReact'
import UserCrud from './UserCrud'
import {counterContext} from './context/context'
function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <counterContext.Provider value={count}>
      <BrowserRouter>
      <Routes>
       <Route index element={<R_Router />} /> 
       <Route path="/home" element={<R_Router />} /> 
       <Route path="/LoginForm" element={<LoginForm />} /> 
       <Route path="/user-list" element={<UserList />} /> 
       <Route path="/react-helmet" element={<React_Helmet />} /> 
       <Route path="/express-react" element={<ExpressReact/>} /> 
       <Route path="/user-crud" element={<UserCrud/>} /> 
      
      </Routes>
      </BrowserRouter>
      </counterContext.Provider>

      {/* <LoginForm />
      <UserList />
      <R_Router /> */}
    </>
  )
}

export default App
