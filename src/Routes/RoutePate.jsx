import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/login'
import  Home  from '../Components/Home/home'
import PublicRoute from '../Components/PublicRoute/PublicRoute'
import ForgotPassword from '../Components/Login/ForgetPswrd'
import OtpVerification from '../Components/Login/Otp-verfy'
import Signup from '../Components/Login/Signup'
import SetPassword from '../Components/Login/SetPswrd'
import CategoryList from '../Components/Category/Categorylist'
import AddCustomerForm from '../Components/Customers/addNewCustmr'
import BusinessForm from '../Components/Category/Buisines'

function RoutePate() {

  return (
    <Routes>
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification"   element={<OtpVerification  value='signup'/>} />
            <Route path="/otp-Forgot"   element={<OtpVerification value='forgot' />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Signup />} />
            {/* <Route path="/register" element={<CategoryList />} /> */}
            <Route path="/setPassword" element={<SetPassword />} />
            <Route path="/select-category" element={<BusinessForm />} />


    </Routes>
  )
}

export default RoutePate
