import * as mongoose from 'mongoose';

const perros = new mongoose.Schema({
    nombre: String,
    raza: String,
    tamanio: String,
    edad: Number,
});

const perro = mongoose.model("Perro", perros);

export default perro;