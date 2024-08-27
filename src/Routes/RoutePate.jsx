import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/login'
import  Home  from '../Components/Home/home'
import PublicRoute from '../Components/PublicRoute/PublicRoute'
import ForgotPassword from '../Components/Login/ForgetPswrd'

function RoutePate() {

  return (
    <Routes>
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  )
}

export default RoutePate
