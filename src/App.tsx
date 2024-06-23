import './App.css'
import React from 'react'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>Politeia | πολιτεία</h1>
        </header>
        <main>
          <AppRoutes />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
