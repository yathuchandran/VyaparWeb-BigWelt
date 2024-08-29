import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutePath from './Routes/RoutePate';
function App() {

  return (
    
     <BrowserRouter>
      <Routes>
        <Route path='/*' element={<RoutePath />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
