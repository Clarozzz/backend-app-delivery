import mongoose from 'mongoose';
import { Usuario } from './usuario.model';

const schema = new mongoose.Schema<Usuario>({
    idUsuario: Number,
    nombre: String,
    apellido: String,
    usuario: String,
    contrasena: String,
    direccion: String,
    metodoPago: Object,
    ordenes: [],
    total: Number
})

export const UsuariosSchema = mongoose.model('usuarios', schema);