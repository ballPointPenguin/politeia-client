import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const AdminDashboard: React.FC = () => {
  const location = useLocation()
  const isAdminHome = location.pathname === '/admin'

  return (
    <AdminContainer>
      {isAdminHome && <h2>AdminDashboard</h2>}
      <Nav>
        <NavItem>
          <StyledLink to="/admin/export">Export</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/admin/reports">Reports</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/admin/tools">Tools</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/admin/data">Data Explore</StyledLink>
        </NavItem>
      </Nav>
    </AdminContainer>
  )
}

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: var(--color-bg-medium);
  color: var(--color-text-light);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
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

export default AdminDashboard
