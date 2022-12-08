"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasOrdenes = void 0;
const express_1 = __importDefault(require("express"));
const ordenes_controller_1 = require("../controllers/ordenes.controller");
exports.rutasOrdenes = express_1.default.Router();
exports.rutasOrdenes.post('/', ordenes_controller_1.crearOrden);
exports.rutasOrdenes.get('/:id', ordenes_controller_1.obtenerOrden);
exports.rutasOrdenes.get('/', ordenes_controller_1.obtenerTodasOrdenes);
exports.rutasOrdenes.put('/:id', ordenes_controller_1.actualizarOrden);
exports.rutasOrdenes.delete('/:id', ordenes_controller_1.eliminarOrden);
