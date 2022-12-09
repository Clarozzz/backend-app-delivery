"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidoresSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idRepartidor: Number,
    nombreRepartidor: String,
    apellidoRepartidor: String,
    usuarioRepartidor: String,
    contrasenaRepartidor: String,
    ordenesTomadas: [],
    ordenesEntregadas: []
});
exports.RepartidoresSchema = mongoose_1.default.model('repartidores', schema);
