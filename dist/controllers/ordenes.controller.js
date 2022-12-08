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
exports.eliminarOrden = exports.actualizarOrden = exports.obtenerTodasOrdenes = exports.obtenerOrden = exports.crearOrden = void 0;
const orden_schema_1 = require("../models/orden.schema");
const crearOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaOrden = new orden_schema_1.OrdenesSchema({
        idOrden: req.body.idOrden,
        nombreCliente: req.body.nombreCliente,
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        total: req.body.total,
        estado: req.body.estado
    });
    const result = yield nuevaOrden.save();
    res.send(result);
    res.end();
});
exports.crearOrden = crearOrden;
const obtenerOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orden_schema_1.OrdenesSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerOrden = obtenerOrden;
const obtenerTodasOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    orden_schema_1.OrdenesSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodasOrdenes = obtenerTodasOrdenes;
const actualizarOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orden_schema_1.OrdenesSchema.updateOne({ _id: req.params.id }, {
        idOrden: req.body.idOrden,
        nombreCliente: req.body.nombreCliente,
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        total: req.body.total,
        estado: req.body.estado
    });
    res.send(result);
    res.end();
});
exports.actualizarOrden = actualizarOrden;
const eliminarOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orden_schema_1.OrdenesSchema.remove({ _id: req.params.id });
    res.send(result);
    res.end();
});
exports.eliminarOrden = eliminarOrden;
