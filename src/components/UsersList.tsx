import type { User } from '../types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <Link to={`/users/${user.uid}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList