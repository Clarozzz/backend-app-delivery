"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasAdministradores = void 0;
const express_1 = __importDefault(require("express"));
const administradores_controllers_1 = require("../controllers/administradores.controllers");
exports.rutasAdministradores = express_1.default.Router();
exports.rutasAdministradores.get('/:id', administradores_controllers_1.obtenerAdministrador);
