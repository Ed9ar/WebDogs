
import * as mongoose from 'mongoose';

const perros = new mongoose.Schema({
  nombre: String,
    
  raza:  String,
    
  edad:  Number,
    
  descripcion:String,
  
  correoContacto:String,

  url: String,
});

const Perro = mongoose.model("Perro", perros);

export default Perro;
