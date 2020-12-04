import * as express from 'express';
import PerroController from './controllers/perroController';
import DenunciaController from './controllers/denunciaController';

function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();
    router.route("/perro").get(perroController.getAll);

    router.route("/perros/count").get(perroController.count);
    router.route("/perro").post(perroController.insert);
    router.route("/perro/:id").get(perroController.get);
    router.route("/perro/:id").put(perroController.update);
    router.route("/perro/:id").delete(perroController.delete);


    //Denuncias
    const denunciaController = new DenunciaController();
    router.route("/denuncia").get(denunciaController.getAll);
    router.route("/denuncia/count").get(denunciaController.count);
    router.route("/denuncia").post(denunciaController.insert);
    router.route("/denuncia/:id").get(denunciaController.get);
    router.route("/denuncia/:id").put(denunciaController.update);
    router.route("/denuncia/:id").delete(denunciaController.delete);

    app.use('/api', router);
}

export default setRoutes;