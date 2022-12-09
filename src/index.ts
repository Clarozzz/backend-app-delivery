import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Database } from './utils/database';
import cors from 'cors';
import { rutasUsuarios } from './routers/usuarios.routers';
import { rutasCategorias } from './routers/categorias.routers';
import { rutasEmpresas } from './routers/empresas.routers';
import { rutasProductos } from './routers/productos.routers';
import { rutasOrdenes } from './routers/ordenes.routers';
import { rutasAdministradores } from './routers/administradores.routers';
import { rutasRepartidoresPendientes } from './routers/repartidorespendientes.routers';
import { rutasRepartidores } from './routers/repartidores.routers';

dotenv.config();
const db: Database = new Database();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios', rutasUsuarios);
app.use('/categorias', rutasCategorias);
app.use('/empresas', rutasEmpresas);
app.use('/productos', rutasProductos);
app.use('/ordenes', rutasOrdenes);
app.use('/administradores', rutasAdministradores);
app.use('/repartidores', rutasRepartidores)
app.use('/repartidorespendientes', rutasRepartidoresPendientes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});