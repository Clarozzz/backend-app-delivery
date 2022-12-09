"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasRepartidores = void 0;
const express_1 = __importDefault(require("express"));
const repartidores_controllers_1 = require("../controllers/repartidores.controllers");
exports.rutasRepartidores = express_1.default.Router();
exports.rutasRepartidores.post('/', repartidores_controllers_1.crearRepartidor);
exports.rutasRepartidores.get('/', repartidores_controllers_1.obtenerTodosRepartidores);
exports.rutasRepartidores.get('/:id', repartidores_controllers_1.obtenerRepartidor);
exports.rutasRepartidores.get('/usuario/:id', repartidores_controllers_1.obtenerRepartidorPorUsuario);
exports.rutasRepartidores.put('/:id', repartidores_controllers_1.actualizarRepartidor);
