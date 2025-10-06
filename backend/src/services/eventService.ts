import { db } from "../config/db";

export class EventService {
    async getAllEvents() {
        try {
            const eventos = db.eventos.findMany();

            return eventos;
        } catch (error) {
            console.error(error);
            throw new Error("Ocurrió un error al consultar los eventos.");
        }
    }
}
