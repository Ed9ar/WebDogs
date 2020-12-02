import Perro from '../models/perro';

class PerroController{
    getAll = async(req, res) =>{
        try{
            console.log("Request", req.headers);
            const perros = await Perro.find({});
            res.status(200).json(perros);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }

    insert = async(req, res) => {
        try{
            const per = await new Perro(req.body).save();
            res.status(201).json(per);
        }catch(err){

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
}

export default PerroController;