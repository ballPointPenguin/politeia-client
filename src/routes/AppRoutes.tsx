import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../components/AdminDashboard'
import AuthContext from '../components/AuthContext'
import DataPage from '../components/DataPage'
import ExportPage from '../components/ExportPage'
import ProtectedRoutes from '../components/ProtectedRoutes'
import ReportsPage from '../components/ReportsPage'
import ToolsPage from '../components/ToolsPage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthContext />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/data" element={<DataPage />} />
        <Route path="/admin/data/:type" element={<DataPage />} />
        <Route path="/admin/export" element={<ExportPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} />
        <Route path="/admin/tools" element={<ToolsPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
