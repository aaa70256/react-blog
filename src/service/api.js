// src/services/axios.js
import axios from 'axios';

// 創建 axios 實例
const api = axios.create({
  baseURL: 'http://localhost:8888',  // API 基礎 URL
  timeout: 5000,  // 請求超時時間
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;


export const getServer = {
  posts: () => api.get('/posts'),
  users: () => api.get('/users'),
};

export const postServer = {
  posts: (data) => api.post('/posts',data),
};