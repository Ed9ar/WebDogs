import perro from '../models/perro';

class PerroController{
    getAll = async(req, res) =>{
        try{
            const perros = await perro.find({});
            res.status(200).json(perros);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }

    insert = async(req, res) => {
        try{
            const per = await new perro(req.body).save();
            res.status(201).json(per);
        }catch(err){

        }
    }
}

export default PerroController;