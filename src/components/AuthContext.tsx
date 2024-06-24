import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import GoogleLoginButton from './GoogleLoginButton'
import LogoutButton from './LogoutButton'
import styled from 'styled-components'

const AuthContext: React.FC = () => {
  const { user } = useAuth()

  return (
    <AuthContainer>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <Nav>
            <NavItem>
              <StyledLink to="/admin">Admin Dashboard</StyledLink>
            </NavItem>
            <NavItem>
              <LogoutButton />
            </NavItem>
          </Nav>
        </>
      ) : (
        <GoogleLoginButton />
      )}
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: var(--color-bg-medium);
  color: var(--color-text-light);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
`

const NavItem = styled.li`
  margin: 0;
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: var(--color-text-dark);
  background-color: var(--color-secondary);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-secondary-hover);
    color: var(--color-text-light);
  }
`

export default AuthContext
