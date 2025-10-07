import express, { Request, Response } from 'express';
import cors from "cors";



import { event_router } from './routers/eventRouter';

export const app = express();

// Configuración de CORS Permite las solicitudes desde el frontend
app.use(cors({
  origin: 'https://symmetrical-train-jjg575pgxpx435vgx-5173.app.github.dev/', // ← frontend
  credentials: true, // si usas cookies o tokens con credenciales
}));

app.use(express.json());
// app.use('/eventos', event_router);

app.get('/', (_: Request, res: Response) => {
    res.send({ ok: true, msg: "¡Te damos la bienvenida a Migueventos!" });
});