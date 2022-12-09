import mongoose from "mongoose";
import { Repartidor } from "./repartidor.model";

const schema = new mongoose.Schema<Repartidor>({
    idRepartidor: Number,
    nombreRepartidor: String,
    apellidoRepartidor: String,
    usuarioRepartidor: String,
    contrasenaRepartidor: String,
    ordenesTomadas: [],
    ordenesEntregadas: []
});

export const RepartidoresSchema = mongoose.model('repartidores', schema);