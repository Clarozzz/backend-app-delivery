import express, { Express, Request, Response, Router } from 'express';
import { actualizarRepartidor, crearRepartidor, obtenerRepartidor, obtenerRepartidorPorUsuario, obtenerTodosRepartidores } from '../controllers/repartidores.controllers';

export const rutasRepartidores: Router = express.Router();

rutasRepartidores.post('/', crearRepartidor);

rutasRepartidores.get('/', obtenerTodosRepartidores);

rutasRepartidores.get('/:id', obtenerRepartidor);

rutasRepartidores.get('/usuario/:id', obtenerRepartidorPorUsuario)

rutasRepartidores.put('/:id', actualizarRepartidor);