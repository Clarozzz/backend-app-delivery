"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasIdscolecciones = void 0;
const express_1 = __importDefault(require("express"));
const idscolecciones_controllers_1 = require("../controllers/idscolecciones.controllers");
exports.rutasIdscolecciones = express_1.default.Router();
exports.rutasIdscolecciones.get('/:id', idscolecciones_controllers_1.obtenerIdcoleccion);
exports.rutasIdscolecciones.put('/:id', idscolecciones_controllers_1.actualizarIdcoleccion);
