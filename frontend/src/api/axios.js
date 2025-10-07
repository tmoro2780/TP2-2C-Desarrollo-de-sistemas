// src/api/axiosInstance.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
