import mongoose from "mongoose";
import { Categoria } from "./categoria.model";

const schema = new mongoose.Schema<Categoria>({
    idCategoria: Number,
    nombreCategoria: String,
    icono: String,
    empresas: []
});

export const CategoriasSchema = mongoose.model('categorias', schema);