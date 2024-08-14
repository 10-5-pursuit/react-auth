import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoute from './Pages/ProtectedRoute'
import Tasks from './Pages/Tasks'


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  return (
    <>
      <NavBar 
        user={user} 
        setUser={setUser} 
        setToken={setToken}
      />
      <Routes>
        <Route path="/" element={<Home user={user}/> } />
        <Route 
          path="/signup" 
          element={
            <Signup 
              setUser={setUser} 
              setToken={setToken}
            /> } 
        />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute 
              user={user}
              token={token}
              isAuthenticated={user && token}
              element={Tasks}
            />
          } 
        />
      </Routes>
    </>
  )
}

export default App
