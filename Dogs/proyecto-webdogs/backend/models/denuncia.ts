import * as mongoose from 'mongoose';

const denuncias = new mongoose.Schema({
    fecha: {
    type: String,
    required: [true, "La fecha es requerida"]
    },
    descripcion: {
      type: String,
      minlength: 4,
      maxlength: 255,
      required: [true, "La descripción debe tener 4 caracteres como mínimo y máximo 255 caracteres"],
    },
    responsableDenuncia: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "El nombre del responsable debe tener más de 2 caracteres y no debe tener números"],
    },
    ubicacion: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "La ubicación es requerida y debe tener entre 2 y 255 caracteres"],
    },
    estatus: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: [true, "El estatus es requerido y debe tener entre 2 y 255 caracteres"],
    },
    correoContacto: {
      type: String,
      minlength: 4,
      maxlength: 255,
      required: [true, "Email no puede estar vacío"],
    },
});

const Denuncia = mongoose.model("Denuncia", denuncias);

export default Denuncia;

denuncias.path('correoContacto').validate(function (correoContacto) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(correoContacto.email);
}, 'Email no puede estar vacio y debe ser válido')

