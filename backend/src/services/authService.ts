// En este modulo se crean las querys que se van a realizar 
// a la base de datoa usando Prisma como ORM
import { db } from "../config/db";

import { compare, genSaltSync, hashSync } from "bcrypt-ts";

//Esta clase se encarga de realizar las operaciones CRUD
// sobre la tabla usuarios en la base de datos.
export class AuthService {
    // Crear un nuevo usuario 
    async createUser(data: { username: string; name: string; surname: string; dni: number; email: string; password: string; }) {
        try{
            // hashear contraseña
            const salt = genSaltSync(10);
            const clave_hash = hashSync(data.password, salt);

            // registrar usuario en la db
            const newUser = db.usuario.create({
                data: {
                    username: data.username,
                    nombre_pila: data.name,
                    apellido: data.surname,
                    DNI: data.dni,
                    email: data.email,
                    password: clave_hash
                }
            });

            // devolver usuario
            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al crear el usuario.");
        }
    }
    
    // valida la información de inicio de sesión
    async loginUsuario(data: { email: string; password: string; }) {
        let resultado: number = 0;

        // se busca el usuario en la db por su email
        const user = await db.usuario.findUnique({
            where: {
                email: data.email
            }
        });

        // si se encuentra, se verifica la coincidencia de la contraseña
        if (user) {
            const clave_hash: string = user.password;
            const user_id: number = user.id_usuario;

            const clave_correcta = await compare(data.password, clave_hash);

            if (clave_correcta) {
                resultado = user_id;
            }
        }

        // se devuelve el id de usuario si las credenciales son correctas
        // se devuelve 0 si las credenciales no son correctas
        return resultado;
    }
}