import Perro from '../models/perro';
import  axios  from 'axios';

const multer = require("multer");

const MYME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}



class PerroController{
    getAll = async(req, res) =>{
        try{
            console.log("Request", req.headers);
            const perros = await Perro.find({});
            res.status(200).json(perros);
        }catch(err){
          return res.status(404).json({"mensaje": "No se pudieron obtener los perros"});
        }
    }

    insert = async(req, res, next) => {
        const file = req.file;
        if(!file){
            const error = new Error('No hay archivo');
            res.status(404).json({error: error.message});
            return next(error);
        }
        try{
            console.log("Insertar");
            // console.log(req.body);
            // console.log(req[1])
            const { nombre, raza,tamanio, edad, correo, descripcion } = req.body;
            const infoPerro = {
                nombre: nombre,
                raza: raza,
                tamanio: tamanio,
                edad: edad,
                descripcion: descripcion,
                correoContacto: correo,
                url: file.path,
            }
            const per = await new Perro(infoPerro).save();
            res.status(201).json(per);
        }catch(err){
          return res.status(400).json({"mensaje": "no se pudo añadir el perro"});
        }
    }


    count = async(req, res) => {
        try{
            const count = await Perro.count();
            res.status(201).json(count);
        }catch(err){
          return res.status(400).json({ error: err.message });
        }
    }

    get = async(req, res) => {
        try{
            const obj = await Perro.findOne({_id : req.params.id});
            if(obj){
                res.status(201).json(obj);
            }
            else{
                res.status(400).json({"mensaje": "No encontrado"});
            }
        }catch(err){
            if(err.message.includes("Cast to ObjectId")){
                return res.status(404).json({"mensaje":"Not found"});
            }
            return res.status(500).json({ error: err.message });
        }
    }

    update = async(req, res) => {
        try{
            await Perro.findOneAndUpdate({_id : req.params.id}, req.body);
            res.sendStatus(201);
        }catch(err){
          return res.status(409).json({ "mensaje": "hubo un conflicto al actualizar" });
        }
    }

    delete = async(req, res) => {
        try{
            await Perro.findOneAndRemove({_id : req.params.id});
            res.sendStatus(200);
        }catch(err){
          return res.status(400).json({ "mensaje": "no se pudo eliminar" });
        }
    }

    getImages = async(req, res) =>
            {
                try{

                    let query_params = {
                        breed_ids: req.params.id,
                        limit:1
                    }

                    let response = await axios.get('https://api.thedogapi.com/v1/images/search?breed_ids=22')

                    /*pagination_count = response.headers['pagination-count'];
                    images = response.data
                    current_image = images[0]*/
                    //console.log("-- ("+this.images.length +") Images from TheCatAPI.com")
                    //console.log( this.pagination_count ,'images available for this query.')
                    return res.status(201).response;
                }catch(err){
                  return res.status(404).json({"mensaje": "no se pudieron las imágenes"});
                }
            }
}

export default PerroController;
