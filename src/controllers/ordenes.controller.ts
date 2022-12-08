import { Request, Response } from 'express';
import { OrdenesSchema } from '../models/orden.schema';

export const crearOrden = async (req: Request, res: Response) => {
    const nuevaOrden = new OrdenesSchema({
        idOrden: req.body.idOrden,
        nombreCliente: req.body.nombreCliente,
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        total: req.body.total,
        estado: req.body.estado
    });
    const result = await nuevaOrden.save();
    res.send(result);
    res.end();
}

export const obtenerOrden = async (req: Request, res: Response) => {
    const result = await OrdenesSchema.find({ _id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodasOrdenes = async (req: Request, res: Response) => {
    OrdenesSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const actualizarOrden = async (req: Request, res: Response) => {
    const result = await OrdenesSchema.updateOne({ _id: req.params.id}, {
        idOrden: req.body.idOrden,
        nombreCliente: req.body.nombreCliente,
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        total: req.body.total,
        estado: req.body.estado
    });
    res.send(result);
    res.end();
}

export const eliminarOrden = async (req: Request, res: Response) => {
    const result = await OrdenesSchema.remove({ _id: req.params.id});
    res.send(result);
    res.end();
}
