import express, { Express, Request, Response, Router } from 'express';
import { actualizarEmpresas, crearEmpresa, eliminarEmpresa, obtenerEmpresa, obtenerEmpresaPorId, obtenerTodasEmpresas } from '../controllers/empresas.controllers';

export const rutasEmpresas: Router = express.Router();

rutasEmpresas.post('/', crearEmpresa);

rutasEmpresas.get('/:id', obtenerEmpresa);

rutasEmpresas.get('/', obtenerTodasEmpresas);

rutasEmpresas.get('/empresas-categoria/:id', obtenerEmpresaPorId)

rutasEmpresas.put('/:id', actualizarEmpresas);

rutasEmpresas.delete('/:id', eliminarEmpresa);