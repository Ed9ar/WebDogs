import * as mongoose from 'mongoose';

const denuncias = new mongoose.Schema({
    fecha: String,
    descripcion: String,
    responsableDenuncia: String,
    ubicacion: String,
    estatus: String,
    correoContacto: String
});

const Denuncia = mongoose.model("Denuncia", denuncias);

export default Denuncia;