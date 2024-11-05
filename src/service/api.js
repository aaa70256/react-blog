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
  fansNum: (id) => api.get(`/fansNum/${id}`),
};

export const postServer = {
  posts: (data) => api.post('/posts', data),
  fansNum: (id, data) => api.post(`/fansNum/${id}`, data)
};

export const patchServer = {
  posts: (id, data) => api.patch(`/posts/${id}`, data),
  users: (id, data) => api.patch(`/users/${id}`, data),
  fansNum: (id, data) => api.patch(`/fansNum/${id}`, data)
};