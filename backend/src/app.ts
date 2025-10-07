import express, { Request, Response } from 'express';
import cors from "cors";



import { event_router } from './routers/eventRouter';

export const app = express();

// Configuración de CORS Permite las solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173', // ← frontend
  credentials: true, // si usas cookies o tokens con credenciales
}));

app.use(express.json());
// app.use('/eventos', event_router);

app.get('/', (_: Request, res: Response) => {
    res.send({ ok: true, msg: "¡Te damos la bienvenida a Migueventos!" });
});