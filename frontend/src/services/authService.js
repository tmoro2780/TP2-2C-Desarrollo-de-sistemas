// Este archivo maneja las llamadas a la API relacionadas con la autenticación
import { axiosInstance } from "../api/axios";

// POST: Crea un usuario en la base de datos con la informacion proporcionada
export const createUser = async (userData) => {
    const response = await axiosInstance.post("/signup", userData);
    return response.data;
};

// POST: Inicia sesion con el usuario y valida la informacion del inicio de sesion
export const loginUser = async (email, password) => {
    const response = await axiosInstance.post("/login", { email, password });
    return response.data;
};

// POST: Cierra la sesion del usuario
export const logoutUser = async () => {
    const response = await axiosInstance.post("/logout");
    return response.data;

};
