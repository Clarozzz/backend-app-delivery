import mongoose from "mongoose";
import { Producto } from "./producto.model";

const schema = new mongoose.Schema<Producto>({
    idProducto: Number,
    nombreProducto: String,
    descripcionProducto: String,
    color: String,
    precio: Number,
    image: String
});

export const ProductosSchema = mongoose.model('productos', schema);