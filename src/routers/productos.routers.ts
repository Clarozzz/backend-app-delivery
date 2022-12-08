import express, { Express, Request, Response, Router } from 'express';
import { actualizarProducto, crearProducto, eliminarProducto, obtenerProducto, obtenerProductoPorCodigo, obtenerTodosProductos } from '../controllers/productos.controllers';

export const rutasProductos: Router = express.Router();

rutasProductos.post('/', crearProducto);

rutasProductos.get('/:id', obtenerProducto);

rutasProductos.get('/', obtenerTodosProductos);

rutasProductos.get('/codigo-producto/:id', obtenerProductoPorCodigo)

rutasProductos.put('/:id', actualizarProducto);

rutasProductos.delete('/:id', eliminarProducto);