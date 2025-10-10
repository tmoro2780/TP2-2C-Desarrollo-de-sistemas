// Este archivo contiene funciones para interactuar con la API de usuarios
import { axiosInstance } from "../api/axios";

// Esta función requiere que el usuario ya este autenticado
// GET: Obtener todos los usuarios
export const getUsers = async () => {
    const response = await axiosInstance.get("/usuario"); // GET http://localhost:3000/usuarios
    return response.data;
};

// GET: Obtener todas las entradas de un usuario
export const getUserTickets = async (userId) => {
    const response = await axiosInstance.get(`/usuario/${userId}/entradas`);
    return response.data;
}

// GET: Devuelve todos los eventos creados por el usuario de sesion
export const getUserEvents = async (userId) => {
    const response = await axiosInstance.get(`/usuario/${userId}/eventos`);
    return response.data;
};

// POST: Recarga en el usuario de sesion un monto de saldo indicado
export const rechargeUserBalance = async (userId, paymentMethodId, amount) => {
    const response = await axiosInstance.post(`/usuario/${userId}/recargar-saldo`, { paymentMethodId, amount });
    return response.data;
};
