"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
const usuarios_routers_1 = require("./routers/usuarios.routers");
const categorias_routers_1 = require("./routers/categorias.routers");
const empresas_routers_1 = require("./routers/empresas.routers");
const productos_routers_1 = require("./routers/productos.routers");
const ordenes_routers_1 = require("./routers/ordenes.routers");
dotenv_1.default.config();
const db = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuarios', usuarios_routers_1.rutasUsuarios);
app.use('/categorias', categorias_routers_1.rutasCategorias);
app.use('/empresas', empresas_routers_1.rutasEmpresas);
app.use('/productos', productos_routers_1.rutasProductos);
app.use('/ordenes', ordenes_routers_1.rutasOrdenes);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
