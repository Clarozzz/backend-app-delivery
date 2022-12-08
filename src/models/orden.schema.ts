import mongoose from "mongoose";
import { Orden } from "./orden.model";

const schema = new mongoose.Schema<Orden>({
    idOrden: Number,
    nombreCliente: String,
    nombreProducto: String,
    descripcion: String,
    direccion: String,
    total: Number,
    estado: String
});

export const OrdenesSchema = mongoose.model('ordenes', schema);