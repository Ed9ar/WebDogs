import Denuncia from '../models/denuncia';

class DenunciaController{
    getAll = async(req, res) =>{
        try{
            console.log("Request", req.headers);
            const denuncias = await Denuncia.find({});
            res.status(200).json(denuncias);
        }catch(err){
            return res.status(404).json({"mensaje": "No se pudieron obtener las denuncias"});
        }
    }

    insert = async(req, res) => {
        try{
            const den = await new Denuncia(req.body).save();
            res.status(201).json(den);
        }catch(err){
            return res.status(400).json({"mensaje": "no se pudo añadir la denuncia"});
        }
    }

    count = async(req, res) => {
        try{
            const count = await Denuncia.count();
            res.status(200).json(count);
        }catch(err){
            return res.status(400).json({ error: err.message });
        }
    }

    // Get by id
    get = async (req, res) => {
        try {
        const obj = await Denuncia.findOne({ _id: req.params.id });
        if(obj){
          res.status(200).json(obj);
        }
        else{
          res.status(404).json({"mensaje": "No encontrado"});
        }
        } catch (err) {
          if(err.message.includes("Cast to ObjectId")){
            return res.status(404).json({"mensaje":"Not found"});
          }
          return res.status(500).json({ error: err.message });
        }
    }

    // Update by id
    update = async (req, res) => {
        try {
        await Denuncia.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(201);
        } catch (err) {
            return res.status(409).json({ "mensaje": "hubo un conflicto al actualizar" });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await Denuncia.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
            return res.status(400).json({ "mensaje": "no se pudo eliminar" });
        }
    }
}

export default DenunciaController;
