"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasEmpresas = void 0;
const express_1 = __importDefault(require("express"));
const empresas_controllers_1 = require("../controllers/empresas.controllers");
exports.rutasEmpresas = express_1.default.Router();
exports.rutasEmpresas.post('/', empresas_controllers_1.crearEmpresa);
exports.rutasEmpresas.get('/:id', empresas_controllers_1.obtenerEmpresa);
exports.rutasEmpresas.get('/', empresas_controllers_1.obtenerTodasEmpresas);
exports.rutasEmpresas.get('/empresas-categoria/:id', empresas_controllers_1.obtenerEmpresaPorId);
exports.rutasEmpresas.put('/:id', empresas_controllers_1.actualizarEmpresas);
exports.rutasEmpresas.delete('/:id', empresas_controllers_1.eliminarEmpresa);
