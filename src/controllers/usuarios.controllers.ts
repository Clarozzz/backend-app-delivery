import { Request, Response } from 'express';
import { UsuariosSchema } from '../models/usuario.schema';

export const crearUsuario = async (req: Request, res: Response) => {
    const nuevoUsuario = new UsuariosSchema({
        idUsuario: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion,
        metodoPago: req.body.metodoPago,
        ordenes: req.body.ordenes,
    });
    const result = await nuevoUsuario.save();
    res.send(result);
    res.end();
}

export const obtenerUsuario = async (req: Request, res: Response) => {
    const result = await UsuariosSchema.find({ _id: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerUsuarioPorUsuario = async (req: Request, res: Response) => {
    const result = await UsuariosSchema.find({ usuario: req.params.usuario });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodosUsuarios = async (req: Request, res: Response) => {
    UsuariosSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const actualizarUsuario = async (req: Request, res: Response) => {
    const result = await UsuariosSchema.updateOne({ _id: req.params.id }, {
        idUsuario: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion,
        metodoPago: req.body.metodoPago,
        ordenes: req.body.ordenes,
    });
    res.send(result);
    res.end();
}