import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventService.js";
export default function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        try{
            const fetchEvents = async () => {
                const eventsData = await getAllEvents();
                setEvents(eventsData);
            };
            fetchEvents();
        } 
        catch (error) {
            console.error("Error fetching events:", error);
        }
    }, []);

    return (
        <div>
            <h1>Pagina de Eventos</h1>
            <p>Aqui puedes ver todos los eventos disponibles.</p>
        
            <ul>
                {events.map((item) => (
                    <li key={item.id}>
                        {item.nombre} - {item.categoria} - {item.fecha_evento}
                    </li>
                ))}
            </ul>

        </div>
    )
}