"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idProducto: Number,
    nombreProducto: String,
    descripcionProducto: String,
    color: String,
    precio: Number,
    image: String
});
exports.ProductosSchema = mongoose_1.default.model('productos', schema);
