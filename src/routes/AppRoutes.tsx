import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UsersList from '../components/UsersList'
import UserDetails from '../components/UserDetails'
import AuthContext from '../components/AuthContext'
import ProtectedRoutes from '../components/ProtectedRoutes'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContext />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          {/* Add more protected routes here */}
        </Route>
        {/* Add public routes here if needed */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
