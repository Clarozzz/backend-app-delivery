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
exports.actualizarRepartidor = exports.obtenerTodosRepartidores = exports.obtenerRepartidorPorUsuario = exports.obtenerRepartidor = exports.crearRepartidor = void 0;
const repartidor_schema_1 = require("../models/repartidor.schema");
const crearRepartidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRepartidor = new repartidor_schema_1.RepartidoresSchema({
        idRepartidor: req.body.idRepartidor,
        nombreRepartidor: req.body.nombreRepartidor,
        apellidoRepartidor: req.body.apellidoRepartidor,
        usuarioRepartidor: req.body.usuarioRepartidor,
        contrasenaRepartidor: req.body.contrasenaRepartidor,
        ordenesTomadas: req.body.ordenesTomadas,
        ordenesEntregadas: req.body.ordenesEntregadas
    });
    const result = yield nuevoRepartidor.save();
    res.send(result);
    res.end();
});
exports.crearRepartidor = crearRepartidor;
const obtenerRepartidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repartidor_schema_1.RepartidoresSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerRepartidor = obtenerRepartidor;
const obtenerRepartidorPorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repartidor_schema_1.RepartidoresSchema.find({ usuarioRepartidor: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerRepartidorPorUsuario = obtenerRepartidorPorUsuario;
const obtenerTodosRepartidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    repartidor_schema_1.RepartidoresSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodosRepartidores = obtenerTodosRepartidores;
const actualizarRepartidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repartidor_schema_1.RepartidoresSchema.updateOne({ _id: req.params.id }, {
        idRepartidor: req.body.idRepartidor,
        nombreRepartidor: req.body.nombreRepartidor,
        apellidoRepartidor: req.body.apellidoRepartidor,
        usuarioRepartidor: req.body.usuarioRepartidor,
        contrasenaRepartidor: req.body.contrasenaRepartidor,
        ordenesTomadas: req.body.ordenesTomadas,
        ordenesEntregadas: req.body.ordenesEntregadas
    });
    res.send(result);
    res.end();
});
exports.actualizarRepartidor = actualizarRepartidor;
