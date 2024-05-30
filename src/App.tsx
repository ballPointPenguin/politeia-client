import { useState } from 'react'
import './App.css'
import GoogleLoginButton from './GoogleLoginButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Politeia</h1>
      <GoogleLoginButton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
