"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasCategorias = void 0;
const express_1 = __importDefault(require("express"));
const categorias_controllers_1 = require("../controllers/categorias.controllers");
exports.rutasCategorias = express_1.default.Router();
exports.rutasCategorias.get('/:id', categorias_controllers_1.obtenerCategoria);
exports.rutasCategorias.get('/', categorias_controllers_1.obtenerTodasCategorias);
exports.rutasCategorias.put('/:id', categorias_controllers_1.actualizarCategoria);
