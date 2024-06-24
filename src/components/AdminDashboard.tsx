import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AdminDashboard: React.FC = () => {
  return (
    <AdminContainer>
      <h2>Admin Dashboard</h2>
      <Nav>
        <NavItem>
          <StyledLink to="/export">Export</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/reports">Reports</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/tools">Tools</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/data">Data Explore</StyledLink>
        </NavItem>
        {/* Add more links as needed */}
      </Nav>
    </AdminContainer>
  )
}

const AdminContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
