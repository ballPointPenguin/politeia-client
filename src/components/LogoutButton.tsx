import React from 'react'
import { useAuth } from '../hooks/useAuth'
import styled from 'styled-components'

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

  return <StyledButton onClick={handleLogout}>Logout</StyledButton>
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: var(--color-text-light);
  background-color: var(--color-accent);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-accent-hover);
    color: var(--color-text-light);
  }
`

export default LogoutButton
