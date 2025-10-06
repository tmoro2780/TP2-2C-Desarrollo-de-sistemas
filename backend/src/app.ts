import express, { Request, Response } from 'express';

import { event_router } from './routers/eventRouter';

export const app = express();

app.use(express.json());
app.use('/eventos', event_router);

app.get('/', (_: Request, res: Response) => {
    res.send({ ok: true, msg: "¡Te damos la bienvenida a Migueventos!" });
});