import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout: React.FC = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  width: 100%;
  background-color: var(--color-bg-dark);
  color: var(--color-text-light);
`

export default Layout
