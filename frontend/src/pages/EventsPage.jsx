import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventService.js";
export default function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const eventsData = await getAllEvents();
            setEvents(eventsData.data || eventsData);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
        };
        fetchEvents();
    }, []);


    if (!events.length) {
        return <div>No hay eventos disponibles.</div>;
    }
    return (
        <div>
            <h1>Pagina de Eventos</h1>
            <p>Aqui puedes ver todos los eventos disponibles.</p>
        
            <ul>
                {events.map((item) => (
                    <li key={item.id}>
                        <h2>
                            {item.nombre} 
                        </h2>
                        <p>{item.descripcion}</p>
                        <p>categoria: {item.categoria}</p>
                        <p>fecha: {item.fecha_evento}</p>
                        <p>ubicacion: {item.ubicacion}</p>
                        <p>precio: ${item.precio}</p>
                        <img src={item.imagen} alt="" />
                    </li>
                ))}
            </ul>

        </div>
    )
}