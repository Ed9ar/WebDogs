<<<<<<< Updated upstream
import perro from '../models/perro';
=======
import Perro from '../models/perro';
import  axios  from 'axios';
import { nextTick } from 'process';

const multer = require("multer");

const MYME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}


>>>>>>> Stashed changes

class PerroController{
    getAll = async(req, res) =>{
        try{
            const perros = await perro.find({});
            res.status(200).json(perros);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }

    insert = async(req, res, next) => {
        const file = req.file;
        if(!file){
            const error = new Error('No hay archivo');
            res.status(400).json({error: error.message});
            return next(error);
        }
        try{
<<<<<<< Updated upstream
            const per = await new perro(req.body).save();
=======
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
>>>>>>> Stashed changes
            res.status(201).json(per);
        }catch(err){

        }
    }
<<<<<<< Updated upstream
=======

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
            res.sendStatus(200);
        }catch(err){
            return res.status(400).json({ error: err.message });
        }
    }

    delete = async(req, res) => {
        try{
            await Perro.findOneAndRemove({_id : req.params.id});
            res.sendStatus(200);
        }catch(err){
            return res.status(400).json({ error: err.message });
        }
    }
>>>>>>> Stashed changes
}

export default PerroController;