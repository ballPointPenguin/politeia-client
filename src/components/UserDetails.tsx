import type { User } from '../types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL

const UserDetails: React.FC = () => {
  const { uid } = useParams<{ uid: string }>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/users/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user details:', error))
  }, [uid])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* other user details */}
    </div>
  )
}

export default UserDetails
