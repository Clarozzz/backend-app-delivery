"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.obtenerProductoPorCodigo = exports.obtenerTodosProductos = exports.obtenerProducto = exports.crearProducto = void 0;
const producto_schema_1 = require("../models/producto.schema");
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoProducto = new producto_schema_1.ProductosSchema({
        idProducto: req.body.id,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        color: req.body.color,
        precio: req.body.precio,
        image: req.body.image
    });
    const result = yield nuevoProducto.save();
    res.send(result);
    res.end();
});
exports.crearProducto = crearProducto;
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield producto_schema_1.ProductosSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerProducto = obtenerProducto;
const obtenerTodosProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    producto_schema_1.ProductosSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodosProductos = obtenerTodosProductos;
const obtenerProductoPorCodigo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield producto_schema_1.ProductosSchema.find({ idProducto: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerProductoPorCodigo = obtenerProductoPorCodigo;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield producto_schema_1.ProductosSchema.updateOne({ _id: req.params.id }, {
        idProducto: req.body.id,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        color: req.body.color,
        precio: req.body.precio,
        image: req.body.image
    });
    res.send(result);
    res.end();
});
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield producto_schema_1.ProductosSchema.remove({ _id: req.params.id });
    res.send(result);
    res.end();
});
exports.eliminarProducto = eliminarProducto;
