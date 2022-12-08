export interface Usuario {
    idUsuario: number;
    nombre: string;
    apellido: string;
    usuario: string;
    contrasena: string;
    direccion: string;
    metodoPago: Object;
    ordenes: [];
}