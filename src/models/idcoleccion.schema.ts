import mongoose from "mongoose";
import { Idcoleccion } from "./idcoleccion.model";

const schema = new mongoose.Schema<Idcoleccion>({
    idUsuario: Number,
    idRepartidor: Number,
    idProducto: Number,
    idOrdenes: Number,
    idEmpresas: Number,
    idAdministradores: Number
})

export const IdcoleccionesSchema = mongoose.model('idscolecciones', schema);