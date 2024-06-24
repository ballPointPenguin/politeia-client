import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../components/AdminDashboard'
import AuthContext from '../components/AuthContext'
import Layout from '../components/Layout'
import ProtectedRoutes from '../components/ProtectedRoutes'
import UserDetails from '../components/UserDetails'
import UsersList from '../components/UsersList'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContext />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserDetails />} />
            {/* Add more admin routes as needed */}
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
