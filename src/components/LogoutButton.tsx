import type React from 'react'
import { useAuth } from '../hooks/useAuth'

const API_URL = import.meta.env.VITE_API_URL

const LogoutButton: React.FC = () => {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      const backendResponse = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })

      if (backendResponse.ok) {
        logout()
      } else {
        console.error('Logout Failed:', backendResponse.statusText)
      }
    } catch (error) {
      console.error('Request Failed:', error)
    }
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton
