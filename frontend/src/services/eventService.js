import { axiosInstance } from '../api/axios'

// GET: Obtener todos los eventos
export const getAllEvents = async () => {
  const response = await axiosInstance.get('/eventos'); // GET http://localhost:3000/eventos
  return response.data;
};

// POST: Crear un nuevo evento
export const createEvent = async (userData) => {
  const response = await axiosInstance.post('/eventos', userData); // POST http://localhost:3000/eventos
  return response.data;
};

// GET: Devuelve un evento de la base de datos por su id
export const getEventById = async (eventId) => {
  const response = await axiosInstance.get(`/eventos/id/${eventId}`);
  return response.data;
};

// POST: Compra entradas para un evento o marca asistencia gratuita de un evento
export const purchaseEventTickets = async (eventId, creatorId, userData, amountTickets) => {
  const response = await axiosInstance.post(`/eventos/${eventId}/asistir`, { creatorId, userData, amountTickets });
  return response.data;
};

// POST: Cancela un evento
export const cancelEvent = async (creatorId, eventId) => {
  const response = await axiosInstance.post(`/eventos/id/${eventId}/cancelar`, { creatorId, eventId });
  return response.data;
};
