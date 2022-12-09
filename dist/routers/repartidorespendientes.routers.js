"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasRepartidoresPendientes = void 0;
const express_1 = __importDefault(require("express"));
const repartidorespendientes_controllers_1 = require("../controllers/repartidorespendientes.controllers");
exports.rutasRepartidoresPendientes = express_1.default.Router();
exports.rutasRepartidoresPendientes.post('/', repartidorespendientes_controllers_1.crearRepartidorPendiente);
exports.rutasRepartidoresPendientes.get('/', repartidorespendientes_controllers_1.obtenerTodosRepartidoresPendientes);
exports.rutasRepartidoresPendientes.get('/:id', repartidorespendientes_controllers_1.obtenerRepartidorPendientes);
exports.rutasRepartidoresPendientes.delete('/:id', repartidorespendientes_controllers_1.eliminarRepartidorPendientes);
