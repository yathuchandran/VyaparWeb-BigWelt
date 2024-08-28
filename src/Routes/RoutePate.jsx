import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/login'
import  Home  from '../Components/Home/home'
import PublicRoute from '../Components/PublicRoute/PublicRoute'
import ForgotPassword from '../Components/Login/ForgetPswrd'
import OtpVerification from '../Components/Login/Otp-verfy'
import Signup from '../Components/Login/Signup'

function RoutePate() {

  return (
    <Routes>
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification" element={<OtpVerification/>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Signup />} />

    </Routes>
  )
}

export default RoutePate
