import express, {Express, Request, Response, Router} from 'express';
import { actualizarIdcoleccion, obtenerIdcoleccion } from '../controllers/idscolecciones.controllers';


export const rutasIdscolecciones: Router = express.Router();

rutasIdscolecciones.get('/:id', obtenerIdcoleccion);

rutasIdscolecciones.put('/:id', actualizarIdcoleccion);