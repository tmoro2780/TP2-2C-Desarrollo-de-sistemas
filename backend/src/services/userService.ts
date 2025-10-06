// En este modulo se crean las querys que se van a realizar 
// a la base de datoa usando Prisma como ORM
import { db } from "../config/db";

//Esta clase se encarga de realizar las operaciones CRUD
// sobre la tabla usuarios en la base de datos.
export class UserService {

    // Crear un nuevo usuario 
    createUser(data: { username: string; name: string; dni: BigInteger; email:string; password: string; }) {
        try{
            const newUser = db.usuarios.create({
                data
            });
            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al crear el usuario.");
        }
    }
}