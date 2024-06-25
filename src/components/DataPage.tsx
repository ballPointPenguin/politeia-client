import React from 'react'
import { useParams, Link, Route, Routes } from 'react-router-dom'
import UserTable from './UserTable'
import styled from 'styled-components'

const DataPage: React.FC = () => {
  const { type } = useParams<{ type: string }>()

  return (
    <DataContainer>
      <h1>Data: {type || 'Overview'}</h1>
      <Tabs>
        <TabLink
          to="/admin/data/conversations"
          active={type === 'conversations' ? 'true' : 'false'}
        >
          Conversations
        </TabLink>
        <TabLink
          to="/admin/data/users"
          active={type === 'users' ? 'true' : 'false'}
        >
          Users
        </TabLink>
        <TabLink
          to="/admin/data/participants"
          active={type === 'participants' ? 'true' : 'false'}
        >
          Participants
        </TabLink>
      </Tabs>
      <Routes>
        <Route path="/" element={<div>Select a data type</div>} />
        <Route path="conversations" element={<div>Conversations data</div>} />
        <Route path="users" element={<UserTable />} />
        <Route path="participants" element={<div>Participants data</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </DataContainer>
  )
}

const DataContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: var(--color-bg-light);
  color: var(--color-text-dark);
  height: 100%;
  width: 100%;
  overflow: auto;
  margin: 1.5rem;
`

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-accent);
  margin-bottom: 20px;
`

const TabLink = styled(Link)<{ active: string }>`
  padding: 10px 20px;
  text-decoration: none;
  color: ${({ active }) =>
    active === 'true' ? 'var(--color-link-hover)' : 'var(--color-link)'};
  border-bottom: ${({ active }) =>
    active === 'true' ? '2px solid var(--color-link-hover)' : 'none'};
`

export default DataPage
