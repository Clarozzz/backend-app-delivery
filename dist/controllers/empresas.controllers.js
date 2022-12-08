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
exports.eliminarEmpresa = exports.actualizarEmpresas = exports.obtenerTodasEmpresas = exports.obtenerEmpresaPorId = exports.obtenerEmpresa = exports.crearEmpresa = void 0;
const empresa_schema_1 = require("../models/empresa.schema");
const crearEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaEmpresa = new empresa_schema_1.EmpresasSchema({
        idEmpresa: req.body.id,
        nombreEmpresa: req.body.nombreEmpresa,
        descripcion: req.body.descripcion,
        color: req.body.color,
        logo: req.body.logo,
        productos: req.body.productos
    });
    const result = yield nuevaEmpresa.save();
    res.send(result);
    res.end();
});
exports.crearEmpresa = crearEmpresa;
const obtenerEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield empresa_schema_1.EmpresasSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerEmpresa = obtenerEmpresa;
const obtenerEmpresaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield empresa_schema_1.EmpresasSchema.find({ idEmpresa: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerEmpresaPorId = obtenerEmpresaPorId;
const obtenerTodasEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    empresa_schema_1.EmpresasSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodasEmpresas = obtenerTodasEmpresas;
const actualizarEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield empresa_schema_1.EmpresasSchema.updateOne({ _id: req.params.id }, {
        idEmpresa: req.body.id,
        nombreEmpresa: req.body.nombreEmpresa,
        descripcion: req.body.descripcion,
        color: req.body.color,
        logo: req.body.logo,
        productos: req.body.productos
    });
    res.send(result);
    res.end();
});
exports.actualizarEmpresas = actualizarEmpresas;
const eliminarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield empresa_schema_1.EmpresasSchema.remove({ _id: req.params.id });
    res.send(result);
    res.end();
});
exports.eliminarEmpresa = eliminarEmpresa;
