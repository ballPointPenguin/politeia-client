import type { CredentialResponse } from '@react-oauth/google'
import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useAuth } from '../hooks/useAuth'

const API_URL = import.meta.env.VITE_API_URL

const GoogleLoginButton: React.FC = () => {
  const { login } = useAuth()

  const handleLoginSuccess = async (response: CredentialResponse) => {
    const token = response.credential as string

    try {
      const backendResponse = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token }),
        credentials: 'include'
      })

      if (backendResponse.ok) {
        const data = await backendResponse.json()
        login(data.user)
      } else {
        console.error('Backend Error:', backendResponse.statusText)
      }
    } catch (error) {
      console.error('Request Failed:', error)
    }
  }

  const handleLoginFailure = () => {
    console.error('Login Failed')
  }

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  )
}

export default GoogleLoginButton
