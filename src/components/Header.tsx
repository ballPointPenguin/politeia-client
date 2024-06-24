import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Header: React.FC = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  if (isAdminRoute) return null

  return (
    <HeaderContainer>
      <h1>Politeia | πολιτεία</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  color: var(--color-text-light);
  padding: 20px;
  text-align: center;
`

export default Header
