import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router.jsx'
import { UserProvider } from './utils/context/userContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} basename="/react-blog/" />
    </UserProvider>
  </StrictMode>
)