import mongoose from "mongoose";
import { Repartidorpendiente } from "./repartidorpendiente.model";

const schema = new mongoose.Schema<Repartidorpendiente>({
    nombre: String,
    apellido: String,
    usuario: String,
    contrasena: String
});

export const RepartidoresPendientesSchema = mongoose.model('repartidorespendientes', schema);