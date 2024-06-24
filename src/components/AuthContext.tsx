import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import GoogleLoginButton from './GoogleLoginButton'
import LogoutButton from './LogoutButton'
import styled from 'styled-components'

const AuthContext: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
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
    </div>
  )
}

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
  color: var(--color-text-light);
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-text-light);
  }
`

export default AuthContext
