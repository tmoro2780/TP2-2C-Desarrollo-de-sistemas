import express, { Request, Response } from 'express';
import session from 'express-session';
import cors from "cors";

import { event_router } from './routers/eventRouter';

import { User } from './sessionModels/sessionModels';

// datos de sesión
declare module 'express-session' {
    interface SessionData {
        user: User;
        cart_pedido: Array<number>;
    }
};

export const app = express();

// Configuración de CORS, permite las solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173', // ← frontend
  credentials: true, // si usas cookies o tokens con credenciales
}));

app.use(session({
    secret: 'miguesecret', // Replace with a strong, random secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));

app.use(express.json());
app.use('/eventos', event_router);

app.get('/', (_: Request, res: Response) => {
    res.send({ ok: true, msg: "¡Te damos la bienvenida a Migueventos!" });
});
