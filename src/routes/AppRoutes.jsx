import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainContent from '../components/Layouts/MainContent'
import Settings from '../Setting'
import Profile from '../Profile'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="/dashboard" replace />} />
      {/* Parent Route */}
      <Route path="dashboard" element={<MainContent />}>
        {/* Child Routes */}
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
