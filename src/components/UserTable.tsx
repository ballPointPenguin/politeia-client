import type { User } from '../types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const API_URL = import.meta.env.VITE_API_URL

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const params = new URLSearchParams({
      page: String(page),
      limit: '50'
    }).toString()
    const fetchUsers = async () => {
      const response = await fetch(`${API_URL}/users?${params}`)
      const data = await response.json()
      setUsers(data.data)
      setTotalPages(data.totalPages)
    }
    fetchUsers()
  }, [page])

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1)
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>uid</th>
            <th>hname</th>
            <th>username</th>
            <th>email</th>
            <th>site_id</th>
            <th>is_owner</th>
            <th>site_owner</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.hname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.siteId}</td>
              <td>{user.isOwner ? 'Yes' : 'No'}</td>
              <td>{user.siteOwner ? 'Yes' : 'No'}</td>
              <td>{new Date(Number(user.created)).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
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
  }
`

export default UserTable
