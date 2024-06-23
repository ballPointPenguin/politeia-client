import type { ReactNode } from 'react'
import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

interface AuthUser {
  email: string
  name: string
  picture: string
  sub: string
}

interface AuthContextType {
  user: AuthUser | null
  login: (user: AuthUser) => void
  logout: () => void
}

const API_URL = import.meta.env.VITE_API_URL

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const token = Cookies.get('auth_token')
    if (token) {
      fetch(`${API_URL}/auth/verify`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        credentials: 'include'
      })
        .then((response) => response.json())
        .then((data) => (data.user ? setUser(data.user) : null))
        .catch((error) => console.error('Validation Failed:', error))
    }
  }, [])

  const login = (user: AuthUser) => {
    Cookies.set('auth_token', user.sub, { expires: 7 })
    setUser(user)
  }
  const logout = () => {
    Cookies.remove('auth_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
