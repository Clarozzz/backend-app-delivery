"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idEmpresa: Number,
    nombreEmpresa: String,
    descripcion: String,
    color: String,
    logo: String,
    productos: []
});
exports.EmpresasSchema = mongoose_1.default.model('empresas', schema);
