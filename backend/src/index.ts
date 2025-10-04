import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('¡Te damos la bienvenida a Migueventos!');
});

app.listen(port, () => {
    console.log(`Migueventos, corriendo en http://localhost:${port}`);
});
