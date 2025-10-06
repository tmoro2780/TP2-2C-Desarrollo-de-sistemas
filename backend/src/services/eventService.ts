// En este modulo se crean las querys que se van a realizar 
// a la base de datoa usando Prisma como ORM
import { db } from "../config/db";

//Esta clase se encarga de realizar las operaciones CRUD
// sobre la tabla eventos en la base de datos. 
export class EventService {

    // Obtener todos los eventos
    async getAllEvents() {
        try {
            const eventos = db.eventos.findMany();

            return eventos;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar los eventos.");
        }
    }

    // Obtener un evento por su ID
    async getEventById(id_evento: number) {
        try {
            const evento = await db.eventos.findUnique({
                where: { id_evento }
            });
            return evento;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar el evento.");
        }
    }

    // Crear un nuevo evento
    async createEvent(data: { name: string; category: number; date: Date; location?: string; description?: string; price: number; image?: string; }) {
        try {
            const newEvent = await db.eventos.create({
                data: {
                    nombre: data.name,
                    categoria: data.category,
                    descripcion: data.description,
                    ubicacion: data.location,
                    fecha_evento: data.date,
                    precio: data.price,
                    imagen: data.image,
                    data: new Date(),
                    estado: 1,
                },
            }
        );
            return newEvent;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al crear el evento.");
        }
    }

    // Eliminar un evento por su ID
    async deleteEvent(id_evento: number) {
        try {
            await db.eventos.delete({
                where: { id_evento }
            });
            return { message: "Evento eliminado correctamente." };
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al eliminar el evento.");
        }
    }

    // Actualizar un evento por su ID
    async updateEvent(id_evento: number, data: { name?: string; category?: string; date?: Date; location?: string; description?: string; price?: number; image?: string; }) {
        try {
            const updatedEvent = await db.eventos.update({
                where: { id_evento },
                data: {                    
                    nombre: data.name,
                    categoria: data.category,
                    descripcion: data.description,
                    ubicacion: data.location,
                    fecha_evento: data.date,
                    precio: data.price,
                    imagen: data.image,
                    data: new Date(),
                    estado: 1,
                },
            });
            return updatedEvent;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al actualizar el evento.");
        }
    }

}
