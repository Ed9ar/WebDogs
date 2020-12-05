import * as express from 'express';
import PerroController from './controllers/perroController';
import DenunciaController from './controllers/denunciaController';

import multer from './libs/multer';


function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();
    router.route("/perro").get(perroController.getAll);

    router.route("/perros/count").get(perroController.count);
    router.route("/perro").post(multer.single('file'),perroController.insert);
    router.route("/perro/:id").get(perroController.get);
    router.route("/perro/:id").put(perroController.update);
    router.route("/perro/:id").delete(perroController.delete);


    //Denuncias
    const denunciaController = new DenunciaController();
    router.route("/denuncia").get(denunciaController.getAll);
    router.route("/denuncia/count").get(denunciaController.count);
    router.route("/denuncia").post(denunciaController.insert);
    app.use('/api', router);
}

export default setRoutes;