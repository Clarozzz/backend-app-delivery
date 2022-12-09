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
exports.eliminarRepartidorPendientes = exports.obtenerTodosRepartidoresPendientes = exports.obtenerRepartidorPendientes = exports.crearRepartidorPendiente = void 0;
const repartidorpendiente_schema_1 = require("../models/repartidorpendiente.schema");
const crearRepartidorPendiente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nvoRepartidorPendiente = new repartidorpendiente_schema_1.RepartidoresPendientesSchema({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    });
    const result = yield nvoRepartidorPendiente.save();
    res.send(result);
    res.end();
});
exports.crearRepartidorPendiente = crearRepartidorPendiente;
const obtenerRepartidorPendientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repartidorpendiente_schema_1.RepartidoresPendientesSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerRepartidorPendientes = obtenerRepartidorPendientes;
const obtenerTodosRepartidoresPendientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    repartidorpendiente_schema_1.RepartidoresPendientesSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodosRepartidoresPendientes = obtenerTodosRepartidoresPendientes;
const eliminarRepartidorPendientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repartidorpendiente_schema_1.RepartidoresPendientesSchema.deleteOne({ _id: req.params.id });
    res.send(result);
    res.end();
});
exports.eliminarRepartidorPendientes = eliminarRepartidorPendientes;
