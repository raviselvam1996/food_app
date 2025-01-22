import React from 'react'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
        <AppRoutes/>
        <ToastContainer />

    </>
    
  )
}

export default App
