import React from 'react'
import { Route , Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';


const App = () => {

   const authUser = false;
  return (
    <div className=''>
      <Routes>
         <Routes path = "/" element={authUser ? <HomePage /> : <Navigate to = "/login" />} />
         <Routes path = "/signup" element={authUser ? <SignUpPage /> : <Navigate to = "/" />}  />
         <Routes path = "/login" element={authUser ? <LoginPage /> : <Navigate to = "/" />}  />
         <Routes path = "/settings" element={<SettingsPage />}  />
         <Routes path = "/profile" element={authUser ? <ProfilePage /> : <Navigate to = "/login" />} />
      </Routes>
    </div>
  )
}

export default App

