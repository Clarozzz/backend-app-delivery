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
exports.actualizarIdcoleccion = exports.obtenerIdcoleccion = void 0;
const idcoleccion_schema_1 = require("../models/idcoleccion.schema");
const obtenerIdcoleccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield idcoleccion_schema_1.IdcoleccionesSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerIdcoleccion = obtenerIdcoleccion;
const actualizarIdcoleccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield idcoleccion_schema_1.IdcoleccionesSchema.updateOne({ _id: req.params.id }, {
        idUsuario: req.body.idUsuario,
        idRepartidor: req.body.idRepartidor,
        idProducto: req.body.idProducto,
        idOrdenes: req.body.idOrdenes,
        idEmpresas: req.body.idEmpresas,
        idAdministradores: req.body.idAdministradores
    });
    res.send(result);
    res.end();
});
exports.actualizarIdcoleccion = actualizarIdcoleccion;
