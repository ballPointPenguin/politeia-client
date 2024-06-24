import React from 'react'
import { Link } from 'react-router-dom'
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
          <nav>
            <ul>
              <li>
                <Link to="/admin">Admin Dashboard</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <GoogleLoginButton />
      )}
    </div>
  )
}

export default AuthContext
