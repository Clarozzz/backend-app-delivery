"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdcoleccionesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idUsuario: Number,
    idRepartidor: Number,
    idProducto: Number,
    idOrdenes: Number,
    idEmpresas: Number,
    idAdministradores: Number
});
exports.IdcoleccionesSchema = mongoose_1.default.model('idscolecciones', schema);
