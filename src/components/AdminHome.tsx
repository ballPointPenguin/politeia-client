import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users List</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  )
}

export default AdminHome
