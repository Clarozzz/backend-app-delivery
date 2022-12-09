import { Request, Response } from 'express';
import { RepartidoresPendientesSchema } from '../models/repartidorpendiente.schema';

export const crearRepartidorPendiente = async (req: Request, res: Response) => {
    const nvoRepartidorPendiente = new RepartidoresPendientesSchema({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    });
    const result = await nvoRepartidorPendiente.save();
    res.send(result);
    res.end();
}

export const obtenerRepartidorPendientes = async (req: Request, res: Response) => {
    const result = await RepartidoresPendientesSchema.find({ _id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodosRepartidoresPendientes = async (req: Request, res: Response) => {
    RepartidoresPendientesSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const eliminarRepartidorPendientes = async (req: Request, res : Response) => {
    const result = await RepartidoresPendientesSchema.deleteOne({ _id: req.params.id});
    res.send(result);
    res.end();
}