import express, { Express, Request, Response, Router } from 'express';
import { actualizarOrden, crearOrden, eliminarOrden, obtenerOrden, obtenerTodasOrdenes } from '../controllers/ordenes.controller';

export const rutasOrdenes: Router = express.Router();

rutasOrdenes.post('/', crearOrden);

rutasOrdenes.get('/:id', obtenerOrden);

rutasOrdenes.get('/', obtenerTodasOrdenes);

rutasOrdenes.put('/:id', actualizarOrden);

rutasOrdenes.delete('/:id', eliminarOrden);