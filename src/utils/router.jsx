import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'


export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/home',
    element: <App />,
    children:[
      {
        path:"home",
        element: <App />
      },
      {
        path:"posts",
        element: <PostPage />
      },
    ]
  }
])