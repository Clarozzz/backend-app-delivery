"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasProductos = void 0;
const express_1 = __importDefault(require("express"));
const productos_controllers_1 = require("../controllers/productos.controllers");
exports.rutasProductos = express_1.default.Router();
exports.rutasProductos.post('/', productos_controllers_1.crearProducto);
exports.rutasProductos.get('/:id', productos_controllers_1.obtenerProducto);
exports.rutasProductos.get('/', productos_controllers_1.obtenerTodosProductos);
exports.rutasProductos.get('/codigo-producto/:id', productos_controllers_1.obtenerProductoPorCodigo);
exports.rutasProductos.put('/:id', productos_controllers_1.actualizarProducto);
exports.rutasProductos.delete('/:id', productos_controllers_1.eliminarProducto);
