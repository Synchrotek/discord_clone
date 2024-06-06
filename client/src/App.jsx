import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/authPages/Login/LoginPage';
import RegisterPage from './pages/authPages/Register/RegisterPage';
import Dahsboard from './pages/dashhboard/Dahsboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<Dahsboard />} />
          <Route path='/' element={<Navigate to='/dashboard' />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
