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