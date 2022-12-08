import express, { Express, Request, Response, Router } from 'express';
import { actualizarUsuario, crearUsuario, obtenerTodosUsuarios, obtenerUsuario, obtenerUsuarioPorUsuario } from '../controllers/usuarios.controllers';

export const rutasUsuarios: Router = express.Router();

rutasUsuarios.post('/', crearUsuario);

rutasUsuarios.get('/:id', obtenerUsuario);

rutasUsuarios.get('/iniciar/:usuario', obtenerUsuarioPorUsuario);

rutasUsuarios.get('/', obtenerTodosUsuarios);

rutasUsuarios.put('/:id', actualizarUsuario);