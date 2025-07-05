import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router';
import { Auth } from './pages/Auth.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={ <App /> } />
          <Route path="login" element={ <Auth /> } />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>,
)
