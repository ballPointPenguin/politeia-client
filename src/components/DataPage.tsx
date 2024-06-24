import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const DataPage: React.FC = () => {
  const { type } = useParams<{ type: string }>()

  return (
    <DataContainer>
      <h1>Data: {type || 'Overview'}</h1>
      {/* Implement your tabs, sidebar, and paginated table here */}
    </DataContainer>
  )
}

const DataContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: var(--color-bg-light);
`

export default DataPage
