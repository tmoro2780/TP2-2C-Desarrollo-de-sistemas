// src/api/axiosInstance.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://symmetrical-train-jjg575pgxpx435vgx-3000.app.github.dev/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
