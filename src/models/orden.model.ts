export interface Orden {
    idOrden: number;
    nombreCliente: string;
    nombreProducto: string;
    descripcion: string;
    direccion: string;
    total: number;
    estado: string;
}