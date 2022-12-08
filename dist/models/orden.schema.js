"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idOrden: Number,
    nombreCliente: String,
    nombreProducto: String,
    descripcion: String,
    direccion: String,
    total: Number,
    estado: String
});
exports.OrdenesSchema = mongoose_1.default.model('ordenes', schema);
