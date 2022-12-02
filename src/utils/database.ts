import mongoose from "mongoose";

export class Database {
    db: string = 'meteoro';
    port: string = '27017';
    host: string = 'localhost';
    constructor() {
        this.conectar();
    }

    async conectar() {
        await mongoose.connect(`mongodb://${this.host}:${this.port}/${this.db}`);
        console.log('Ya se conecto a mongodb');
    }
}