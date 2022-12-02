import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Database } from './utils/database';
import cors from 'cors';
import { rutasUsuarios } from './routers/usuarios.routers';

dotenv.config();
const db: Database = new Database();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios', rutasUsuarios);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});