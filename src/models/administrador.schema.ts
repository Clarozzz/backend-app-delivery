import mongoose from "mongoose";
import { Administrador } from './administrador.model';

const schema = new mongoose.Schema<Administrador>({
    idAdministrador: Number,
    nombreAdministrador: String,
    usuarioAdministrador: String,
    contrasena: String,
});

export const AdministradoresSchema = mongoose.model('administradores', schema);