import type { ReactNode } from 'react'
import type React from 'react'
import { createContext, useState } from 'react'

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

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = (user: AuthUser) => setUser(user)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
