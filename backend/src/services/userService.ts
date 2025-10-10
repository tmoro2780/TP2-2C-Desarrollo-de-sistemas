// En este modulo se crean las querys que se van a realizar 
// a la base de datoa usando Prisma como ORM
import { db } from "../config/db";

//Esta clase se encarga de realizar las operaciones CRUD
// sobre la tabla usuarios en la base de datos.
export class UserService {
    // conseguir un usuario por su ID
    async getUserById(id_user: number) {
        try {
            // busca el usuario en la db
            const usuario = await db.usuario.findUnique({
                where: {
                    id_usuario: id_user
                }
            });

            // devuelve el usuario si lo encuentra o null si no lo encuentra
            return usuario;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar el usuario.");
        }
    }

    // conseguir un usuario por su email
    async getUserByEmail(email: string) {
        try {
            // busca el usuario en la db
            const usuario = await db.usuario.findUnique({
                where: {
                    email: email
                }
            });

            // devuelve el usuario si lo encuentra o null si no lo encuentra
            return usuario;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar el usuario.");
        }
    }

    // conseguir un usuario por su username
    async getUserByUsername(username: string) {
        try {
            // busca el usuario en la db
            const usuario = await db.usuario.findUnique({
                where: {
                    username: username
                }
            });

            // devuelve el usuario si lo encuentra o null si no lo encuentra
            return usuario;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar el usuario.");
        }
    }
    
    async balanceRechargeById(id_user: number, amount: number, id_payment_method: number) {
        try {
            // busca el usuario en la db, corta si no lo encuentra
            const usuario = await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: id_user
                }
            });

            // busca el método de pago en al db, corta si no lo encuentra
            const metodo_pago = await db.metodoPago.findUniqueOrThrow({
                where: {
                    id_metodo_pago: id_payment_method
                }
            });

            // si el monto ingresado es 0 o menor, corta
            if (amount <= 0) {
                throw new Error("Monto no válido")
            }

            // obtiene el saldo del usuario y suma el monto a cargar
            const saldo_anterior = usuario.saldo;
            const saldo_nuevo = saldo_anterior + amount;

            // actualiza el saldo del usuario
            await db.usuario.update({
                where: {
                    id_usuario: id_user
                },
                data: {
                    saldo: saldo_nuevo
                }
            })

            // crea un registro de recarga de saldo
            const registro_recarga = await db.registroCargoSaldo.create({
                data: {
                    id_usuario: id_user,
                    monto: amount,
                    saldo_anterior: saldo_anterior,
                    saldo_posterior: saldo_nuevo,
                    fecha_carga: new Date().toDateString(),
                    metodo_pago: id_payment_method
                }
            })

            // devuelve el registro de recarga
            return registro_recarga;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al recargar el saldo del usuario.");
        }
    }
}