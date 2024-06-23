import type { CredentialResponse } from '@react-oauth/google'
import type React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../hooks/useAuth'

const API_URL = import.meta.env.VITE_API_URL

const GoogleLoginButton: React.FC = () => {
  const { login } = useAuth()

  const handleLoginSuccess = async (response: CredentialResponse) => {
    const token = response.credential as string
    const decoded = jwtDecode(token)
    console.log('Login Success:', decoded)

    try {
      const backendResponse = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })

      if (backendResponse.ok) {
        const data = await backendResponse.json()
        console.log('Backend Response:', data)
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
