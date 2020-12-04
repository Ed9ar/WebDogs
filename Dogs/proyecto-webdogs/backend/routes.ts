import * as express from 'express';
import PerroController from './controllers/perroController';
<<<<<<< Updated upstream
=======
import DenunciaController from './controllers/denunciaController';
import multer from './libs/multer';


>>>>>>> Stashed changes

function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();
    router.route("/perro").get(perroController.getAll);
<<<<<<< Updated upstream
=======
    router.route("/perros/count").get(perroController.count);
    router.route("/perro").post(multer.single('file'), perroController.insert);
    router.route("/perro/:id").get(perroController.get);
    router.route("/perro/:id").put(perroController.update);
    router.route("/perro/:id").delete(perroController.delete);
>>>>>>> Stashed changes
    app.use('/api', router);
}

export default setRoutes;