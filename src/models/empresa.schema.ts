import mongoose from "mongoose";
import { Empresa } from "./empresa.model";

const schema = new mongoose.Schema<Empresa>({
    idEmpresa: Number,
    nombreEmpresa: String,
    descripcion: String,
    color: String,
    logo: String,
    productos: []
});

export const EmpresasSchema = mongoose.model('empresas', schema);