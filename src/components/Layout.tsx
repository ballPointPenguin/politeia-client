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
  height: 50%;
  width: 100%;
`

export default Layout
