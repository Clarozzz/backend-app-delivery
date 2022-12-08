import { Request, Response } from 'express';
import { EmpresasSchema } from '../models/empresa.schema';

export const crearEmpresa = async (req: Request, res: Response) => {
    const nuevaEmpresa = new EmpresasSchema({
        idEmpresa: req.body.id,
        nombreEmpresa: req.body.nombreEmpresa,
        descripcion: req.body.descripcion,
        color: req.body.color,
        logo: req.body.logo,
        productos: req.body.productos
    });
    const result = await nuevaEmpresa.save();
    res.send(result);
    res.end();
}

export const obtenerEmpresa = async (req: Request, res: Response) => {
    const result = await EmpresasSchema.find({ _id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerEmpresaPorId = async (req: Request, res: Response) => {
    const result = await EmpresasSchema.find({ idEmpresa: req.params.id });
    res.send(result.length === 1 ? result[0] : {});
    res.end();
}

export const obtenerTodasEmpresas = async (req: Request, res: Response) => {
    EmpresasSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const actualizarEmpresas = async (req: Request, res: Response) => {
    const result = await EmpresasSchema.updateOne({ _id: req.params.id}, {
        idEmpresa: req.body.id,
        nombreEmpresa: req.body.nombreEmpresa,
        descripcion: req.body.descripcion,
        color: req.body.color,
        logo: req.body.logo,
        productos: req.body.productos
    });
    res.send(result);
    res.end();
}

export const eliminarEmpresa = async (req: Request, res: Response) => {
    const result = await EmpresasSchema.remove({ _id: req.params.id});
    res.send(result);
    res.end();
}