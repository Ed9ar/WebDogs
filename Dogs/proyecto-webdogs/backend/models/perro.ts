import * as mongoose from 'mongoose';

const perros = new mongoose.Schema({
  nombre: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: [true, "El nombre de tener más de 2 caracteres y no debe tener números"],

  },
  raza: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: [true, "La raza no debe de contener número y debe tener al menos 2 caracteres"],

  },
  edad: {
    type: Number,
    min: 1,
    max: 25,
    required: [true, "La edad mínima es 1 aunque tenga meses el perro"],

  },
  descripcion: {
    type: String,
    minlength: 4,
    maxlength: 255,
    required: [true, "La descripción debe tener 4 caracteres como mínimo y máximo 255 caracteres"],

  },
  correoContacto: {
    type: String,
    minlength: 4,
    maxlength: 255,
    required: [true, "Email no puede estar vacío"],

  },
});

const Perro = mongoose.model("Perro", perros);

export default Perro;

perros.path('correoContacto').validate(function (correoContacto) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(correoContacto.email);
}, 'Email no puede estar vacio y debe ser válido')

