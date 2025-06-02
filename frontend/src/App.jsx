import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import PartnerLogin from './pages/PartnerLogin'
import PartnerSignup from './pages/PartnerSignup'


const App = () => {

  return (
    <div >
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/signup" element={<UserSignup/>} />
            <Route path="/partner-login" element={<PartnerLogin/>} />
            <Route path="/partner-signup" element={<PartnerSignup/>} />
       </Routes>
    </div>
  )
}

export default App
