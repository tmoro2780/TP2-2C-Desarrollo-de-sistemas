import { axiosInstance } from '../api/axios'

// GET: Obtener todos los eventos
export const getEvents = async () => {
  const response = await axios.get('/eventos'); // GET http://localhost:3000/eventos
  return response.data;
};

// POST: Crear un nuevo evento
export const createEvent = async (userData) => {
  const response = await axios.post('/eventos', userData); // POST http://localhost:3000/eventos
  return response.data;
};