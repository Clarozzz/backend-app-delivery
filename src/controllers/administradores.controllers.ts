import { Request, Response } from 'express';
import { AdministradoresSchema } from '../models/administrador.schema';

export const obtenerAdministrador = async (req: Request, res: Response) => {
    const result = await AdministradoresSchema.find({usuarioAdministrador: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}