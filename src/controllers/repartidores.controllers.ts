import { Request, Response } from 'express';
import { RepartidoresSchema } from '../models/repartidor.schema';

export const crearRepartidor = async (req: Request, res: Response) => {
    const nuevoRepartidor = new RepartidoresSchema({
        idRepartidor: req.body.idRepartidor,
        nombreRepartidor: req.body.nombreRepartidor,
        apellidoRepartidor: req.body.apellidoRepartidor,
        usuarioRepartidor: req.body.usuarioRepartidor,
        contrasenaRepartidor: req.body.contrasenaRepartidor,
        ordenesTomadas: req.body.ordenesTomadas,
        ordenesEntregadas: req.body.ordenesEntregadas
    });
    const result = await nuevoRepartidor.save();
    res.send(result);
    res.end();
}

export const obtenerRepartidor = async (req: Request, res: Response) => {
    const result = await RepartidoresSchema.find({ _id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerRepartidorPorUsuario = async (req: Request, res: Response) => {
    const result = await RepartidoresSchema.find({ usuarioRepartidor: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodosRepartidores = async (req: Request, res: Response) => {
    RepartidoresSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const actualizarRepartidor = async (req: Request, res: Response) => {
    const result = await RepartidoresSchema.updateOne({ _id: req.params.id}, {
        idRepartidor: req.body.idRepartidor,
        nombreRepartidor: req.body.nombreRepartidor,
        apellidoRepartidor: req.body.apellidoRepartidor,
        usuarioRepartidor: req.body.usuarioRepartidor,
        contrasenaRepartidor: req.body.contrasenaRepartidor,
        ordenesTomadas: req.body.ordenesTomadas,
        ordenesEntregadas: req.body.ordenesEntregadas
    });
    res.send(result);
    res.end();
}