import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/Auth/ForgotPassword';
import LogIn from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Dashboard/Profile';
import './styles/main.scss'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/dashboard' element={<Dashboard title="Dashboard" />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
