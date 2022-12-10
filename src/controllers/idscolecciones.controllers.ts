import { Request, Response } from 'express';
import { IdcoleccionesSchema } from '../models/idcoleccion.schema';

export const obtenerIdcoleccion = async (req: Request, res: Response) => {
    const result = await IdcoleccionesSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const actualizarIdcoleccion = async (req: Request, res: Response) => {
    const result = await IdcoleccionesSchema.updateOne({ _id: req.params.id }, {
        idUsuario: req.body.idUsuario,
        idRepartidor: req.body.idRepartidor,
        idProducto: req.body.idProducto,
        idOrdenes: req.body.idOrdenes,
        idEmpresas: req.body.idEmpresas,
        idAdministradores: req.body.idAdministradores
    });
    res.send(result);
    res.end();
}