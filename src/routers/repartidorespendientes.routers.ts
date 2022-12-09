import express, { Express, Request, Response, Router } from 'express';
import { crearRepartidorPendiente, eliminarRepartidorPendientes, obtenerRepartidorPendientes, obtenerTodosRepartidoresPendientes } from '../controllers/repartidorespendientes.controllers';

export const rutasRepartidoresPendientes: Router = express.Router();

rutasRepartidoresPendientes.post('/', crearRepartidorPendiente);

rutasRepartidoresPendientes.get('/', obtenerTodosRepartidoresPendientes);

rutasRepartidoresPendientes.get('/:id', obtenerRepartidorPendientes)

rutasRepartidoresPendientes.delete('/:id', eliminarRepartidorPendientes);