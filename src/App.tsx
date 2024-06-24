import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/*" element={<Layout />}>
              <Route path="*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
