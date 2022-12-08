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
exports.actualizarCategoria = exports.obtenerTodasCategorias = exports.obtenerCategoria = void 0;
const categoria_schema_1 = require("../models/categoria.schema");
const obtenerCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoria_schema_1.CategoriasSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerCategoria = obtenerCategoria;
const obtenerTodasCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    categoria_schema_1.CategoriasSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodasCategorias = obtenerTodasCategorias;
const actualizarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoria_schema_1.CategoriasSchema.updateOne({ _id: req.params.id }, {
        idCategoria: req.body.id,
        nombreCategoria: req.body.nombreCategoria,
        icono: req.body.icono,
        empresas: req.body.empresas
    });
    res.send(result);
    res.end();
});
exports.actualizarCategoria = actualizarCategoria;
