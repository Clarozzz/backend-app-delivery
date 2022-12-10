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
exports.actualizarUsuario = exports.obtenerTodosUsuarios = exports.obtenerUsuarioPorUsuario = exports.obtenerUsuario = exports.crearUsuario = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoUsuario = new usuario_schema_1.UsuariosSchema({
        idUsuario: req.body.idUsuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion,
        metodoPago: req.body.metodoPago,
        ordenes: req.body.ordenes,
    });
    const result = yield nuevoUsuario.save();
    res.send(result);
    res.end();
});
exports.crearUsuario = crearUsuario;
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield usuario_schema_1.UsuariosSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerUsuario = obtenerUsuario;
const obtenerUsuarioPorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield usuario_schema_1.UsuariosSchema.find({ usuario: req.params.usuario });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
});
exports.obtenerUsuarioPorUsuario = obtenerUsuarioPorUsuario;
const obtenerTodosUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    usuario_schema_1.UsuariosSchema.find().then(result => {
        res.send(result);
        res.end();
    });
});
exports.obtenerTodosUsuarios = obtenerTodosUsuarios;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield usuario_schema_1.UsuariosSchema.updateOne({ _id: req.params.id }, {
        idUsuario: req.body.idUsuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion,
        metodoPago: req.body.metodoPago,
        ordenes: req.body.ordenes,
    });
    res.send(result);
    res.end();
});
exports.actualizarUsuario = actualizarUsuario;
