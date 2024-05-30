import "./index.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App.tsx"
import React from "react"
import ReactDOM from "react-dom/client"

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
