import express, { Express, Request, Response, Router } from 'express';
import { actualizarUsuario, crearUsuario, obtenerTodosUsuarios, obtenerUsuario } from '../controllers/usuarios.controllers';

export const rutasUsuarios: Router = express.Router();

rutasUsuarios.post('/', crearUsuario);

rutasUsuarios.get('/:id', obtenerUsuario);

rutasUsuarios.get('/', obtenerTodosUsuarios);

rutasUsuarios.put('/:id', actualizarUsuario)