import { Request, Response } from 'express';
import { ProductosSchema } from '../models/producto.schema';

export const crearProducto = async (req: Request, res: Response) => {
    const nuevoProducto = new ProductosSchema({
        idProducto: req.body.idProducto,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        color: req.body.color,
        precio: req.body.precio,
        image: req.body.image
    });
    const result = await nuevoProducto.save();
    res.send(result);
    res.end();
}

export const obtenerProducto = async (req: Request, res: Response) => {
    const result = await ProductosSchema.find({_id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodosProductos = async (req: Request, res: Response) => {
    ProductosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const obtenerProductoPorCodigo = async (req: Request, res: Response) => {
    const result = await ProductosSchema.find({ idProducto: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const actualizarProducto = async (req: Request, res: Response) => {
    const result = await ProductosSchema.updateOne({ _id: req.params.id}, {
        idProducto: req.body.id,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        color: req.body.color,
        precio: req.body.precio,
        image: req.body.image
    });
    res.send(result);
    res.end();
}

export const eliminarProducto = async (req: Request, res: Response) => {
    const result = await ProductosSchema.deleteOne({ _id: req.params.id});
    res.send(result);
    res.end();
}