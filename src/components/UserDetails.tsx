import type { User } from '../types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails: React.FC = () => {
  const { uid } = useParams<{ uid: string }>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`/api/users/${uid}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user details:', error))
  }, [uid])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* other user details */}
    </div>
  )
}

export default UserDetails