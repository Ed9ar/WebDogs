import * as mongoose from 'mongoose';
var mongooseIntl = require('mongoose-intl');

const denuncias = new mongoose.Schema({
  fecha: {
    type: String,
    required: [true, "La fecha es requerida"],
    intl: true
    },
    descripcion: {
      type: String,
      minlength: 4,
      maxlength: 255,
      required: [true, "La descripción debe tener 4 caracteres como mínimo y máximo 255 caracteres"],
      intl: true
    },
    responsableDenuncia: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "El nombre del responsable debe tener más de 2 caracteres y no debe tener números"],
      intl: true
    },
    ubicacion: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "La ubicación es requerida y debe tener entre 2 y 255 caracteres"],
      intl: true
    },
    estatus: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "El estatus es requerido y debe tener entre 2 y 255 caracteres"],
      intl: true
    },
    correoContacto: String
});
denuncias.plugin(mongooseIntl, { languages: ['es', 'en'], defaultLanguage: 'es' });

const Denuncia = mongoose.model("Denuncia", denuncias);

export default Denuncia;
