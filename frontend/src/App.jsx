import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/authPages/LoginPage/LoginPage'
import RegisterPage from './pages/authPages/RegisterPage/RegisterPage'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login'
            element={<LoginPage />}
          />
          <Route path='/register'
            element={<RegisterPage />}
          />
          <Route path='/dashboard'
            element={<Dashboard />}
          />
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='*' element={<h1>Page not Found 😭</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


