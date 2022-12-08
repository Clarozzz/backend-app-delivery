"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasUsuarios = void 0;
const express_1 = __importDefault(require("express"));
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
exports.rutasUsuarios = express_1.default.Router();
exports.rutasUsuarios.post('/', usuarios_controllers_1.crearUsuario);
exports.rutasUsuarios.get('/:id', usuarios_controllers_1.obtenerUsuario);
exports.rutasUsuarios.get('/iniciar/:usuario', usuarios_controllers_1.obtenerUsuarioPorUsuario);
exports.rutasUsuarios.get('/', usuarios_controllers_1.obtenerTodosUsuarios);
exports.rutasUsuarios.put('/:id', usuarios_controllers_1.actualizarUsuario);
