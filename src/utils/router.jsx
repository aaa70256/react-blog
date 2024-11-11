import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

export const router = createBrowserRouter([
  {
    index: true,  // 根路徑
    element: <Navigate to="/login" replace /> //父元素"/"默認子路徑
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "posts",
        element: <PostPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
    ]
  }
]);