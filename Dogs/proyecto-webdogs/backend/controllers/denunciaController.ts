import Denuncia from '../models/denuncia';

class DenunciaController{
    getAll = async(req, res) =>{
        try{
            console.log("Request", req.headers);
            const denuncias = await Denuncia.find({});
            res.status(200).json(denuncias);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }

    insert = async(req, res) => {
        try{
            const den = await new Denuncia(req.body).save();
            res.status(201).json(den);
        }catch(err){

        }
    }

    count = async(req, res) => {
        try{
            const count = await Denuncia.count();
            res.status(201).json(count);
        }catch(err){
            return res.status(400).json({ error: err.message });
        }
    }

    // Get by id
    get = async (req, res) => {
        try {
        const obj = await Denuncia.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

    // Update by id
    update = async (req, res) => {
        try {
        console.log(req.params.id.type());
        await Denuncia.findOneAndUpdate({ _id: req.params.id }, req.body, {  returnOriginal: false});
        res.sendStatus(200);
        //console.log(req.body );
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
            console.log(req.params.id );
        await Denuncia.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}

export default DenunciaController;