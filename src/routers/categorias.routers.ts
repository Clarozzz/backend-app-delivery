import express, { Express, Request, Response, Router } from 'express';
import { actualizarCategoria, obtenerCategoria, obtenerTodasCategorias } from '../controllers/categorias.controllers';

export const rutasCategorias: Router = express.Router();

rutasCategorias.get('/:id', obtenerCategoria);

rutasCategorias.get('/', obtenerTodasCategorias);

rutasCategorias.put('/:id', actualizarCategoria);