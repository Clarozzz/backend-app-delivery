import express, { Express, Request, Response, Router } from 'express';
import { obtenerAdministrador } from '../controllers/administradores.controllers';

export const rutasAdministradores: Router = express.Router();

rutasAdministradores.get('/:id', obtenerAdministrador);