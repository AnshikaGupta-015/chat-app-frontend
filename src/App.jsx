import React from 'react'

const App = () => {
  return (
    <div className=''>
      <Routes>
         <Routes path = "/" element={authUser ? <HomePage /> : <Navigate to = "/login" />} />
         <Routes path = "/signup" element={authUser ? <SignUpPage /> : <Navigate to = "/" />}  />
         <Routes path = "/login" element={authUser ? <LoginPage /> : <Navigate to = "/" />}  />
         <Routes path = "/settings" element={<SettingPage />}  />
         <Routes path = "/profile" element={authUser ? <ProfilePage /> : <Navigate to = "/login" />} />
      </Routes>
    </div>
  )
}

export default App

