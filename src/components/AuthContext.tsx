import React from 'react'
import { useAuth } from '../hooks/useAuth'
import GoogleLoginButton from './GoogleLoginButton'
import LogoutButton from './LogoutButton'

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

export default AuthContext
