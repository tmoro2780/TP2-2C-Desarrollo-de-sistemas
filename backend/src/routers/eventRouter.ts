import { Router } from "express";
import { EventService } from "../services/eventService";

export const event_router = Router();
const event_service = new EventService();

event_router.get('/', async (_, res) => {
    try {
        const events = await event_service.getAllEvents();
        res.status(200).json({ ok: true, data: events });
    } catch (error) {
        res.status(500).json({ ok: false, msg: (error as any).message });
    }
})
