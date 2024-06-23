import './App.css'
import type React from 'react'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'
import GoogleLoginButton from './components/GoogleLoginButton'
import LogoutButton from './components/LogoutButton'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>Politeia | πολιτεία</h1>
          <AuthContext />
        </header>
      </div>
    </AuthProvider>
  )
}

const AuthContext: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <LogoutButton />
        </>
      ) : (
        <GoogleLoginButton />
      )}
    </div>
  )
}

export default App
