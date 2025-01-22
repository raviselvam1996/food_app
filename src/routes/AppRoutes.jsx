import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainContent from '../components/Layouts/MainContent'
import Settings from '../Setting'
import Menu from '../components/Menu/Menu'
import CustomForm from '../components/FormElements/custom-form-elements/CustomForm'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="/dashboard" replace />} />
      {/* Parent Route */}
      <Route path="dashboard" element={<MainContent />}>
        {/* Child Routes */}
        <Route path="settings" element={<Settings />} />
        <Route path="menu" element={<Menu />} />
        <Route path="customForm" element={<CustomForm/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
