// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET: Primera conexion con el backend Respuesta: "Hola Mundo"
export const inicio = async () => {
  const response = await axios.get('/'); // GET http://localhost:3000/
  return response.data;
};

export default axiosInstance;
