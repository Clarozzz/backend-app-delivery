import { Request, Response } from 'express';
import { CategoriasSchema } from '../models/categoria.schema';

export const obtenerCategoria = async (req: Request, res: Response) => {
    const result = await CategoriasSchema.find({_id: req.params.id});
    res.send(result.length === 1 ? result[0] : {});
    res.end();   
}

export const obtenerTodasCategorias = async (req: Request, res: Response) => {
    CategoriasSchema.find().then(result => {
        res.send(result);
        res.end();
    })
}

export const actualizarCategoria = async (req: Request, res: Response) => {
    const result = await CategoriasSchema.updateOne({_id: req.params.id}, {
        idCategoria: req.body.id,
        nombreCategoria: req.body.nombreCategoria,
        icono: req.body.icono,
        empresas: req.body.empresas
    });
    res.send(result);
    res.end();
}