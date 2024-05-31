import type { CredentialResponse } from '@react-oauth/google'

import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import React from 'react'

const GoogleLoginButton: React.FC = () => {
  const handleLoginSuccess = (response: CredentialResponse) => {
    const token = response.credential as string
    const decoded = jwtDecode(token)
    console.log('Login Success:', decoded)
    // Send the token to your backend for further processing
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
