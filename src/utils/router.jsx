import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,  // 根路徑
        element: <Navigate to="/home" replace /> //父元素"/"默認子路徑
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "posts",
        element: <PostPage />
      },
    ]
  }
]);