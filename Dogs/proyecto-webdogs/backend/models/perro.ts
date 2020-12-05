
import * as mongoose from 'mongoose';

const perros = new mongoose.Schema({
  nombre: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: [true, "El nombre debe tener más de 2 caracteres y no debe tener números"],
  },
  tamanio: {
    type: String,
    required: [true, "El tamaño es requerido"],

  },
  raza: {
    type: String,
    required: [true, "La raza es requerida"],

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
  url: String,
});

const Perro = mongoose.model("Perro", perros);

export default Perro;
