import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import GlobalStyle from './styles/global';
import LoginPage from './pages/LoginPage';
import {Navigate} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
const App =() => {
  return (
    <>
    <GlobalStyle />
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </>
  );
    
    
}

export default App;
