import type { Participant } from '../types'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const API_URL = import.meta.env.VITE_API_URL

const ParticipantTable: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [cursor, setCursor] = useState('')
  const [nextCursor, setNextCursor] = useState('')
  const [prevCursor, setPrevCursor] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchParticipants = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams({
      cursor,
      limit: '50'
    }).toString()
    try {
      const response = await fetch(`${API_URL}/participants?${params}`)
      const data = await response.json()

      setParticipants(data.data)
      setNextCursor(data.nextCursor)
      setPrevCursor(data.prevCursor)
    } catch (error) {
      console.error('Error fetching participants', error)
    } finally {
      setLoading(false)
    }
  }, [cursor])

  useEffect(() => {
    fetchParticipants()
  }, [fetchParticipants])

  const handleNextCursor = useCallback(() => {
    if (nextCursor) {
      setCursor(nextCursor)
    }
  }, [nextCursor])

  const handlePrevCursor = useCallback(() => {
    if (prevCursor) {
      setCursor(prevCursor)
    }
  }, [prevCursor])

  if (loading) {
    return <div>Loading...</div> // TODO - replace this with a spinner component
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>pid</th>
            <th>uid</th>
            <th>zid</th>
            <th>voteCount</th>
            <th>lastInteraction</th>
            <th>subscribed</th>
            <th>lastNotified</th>
            <th>nsli</th>
            <th>mod</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.pid}>
              <td>{participant.pid}</td>
              <td>{participant.uid}</td>
              <td>{participant.zid}</td>
              <td>{participant.voteCount}</td>
              <td>
                {new Date(
                  Number(participant.lastInteraction)
                ).toLocaleDateString()}
              </td>
              <td>{participant.subscribed}</td>
              <td>
                {new Date(
                  Number(participant.lastNotified)
                ).toLocaleDateString()}
              </td>
              <td>{participant.nsli}</td>
              <td>{participant.mod}</td>
              <td>
                {new Date(Number(participant.created)).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <button onClick={handlePrevCursor} disabled={!prevCursor}>
          Previous
        </button>
        <button onClick={handleNextCursor} disabled={!nextCursor}>
          Next
        </button>
      </Pagination>
    </div>
  )
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid var(--color-secondary);
    padding: 8px;
    text-align: left;
  }
`

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 8px 16px;
    background-color: var(--color-accent);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background-color: var(--color-disabled);
      cursor: not-allowed;
    }
  }
`

export default ParticipantTable
