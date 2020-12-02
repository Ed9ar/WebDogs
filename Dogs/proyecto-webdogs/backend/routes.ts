import * as express from 'express';
import PerroController from './controllers/perroController';

function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();
    router.route("/perro").get(perroController.getAll);
    router.route("/perros/count").get(perroController.count);
    router.route("/perro").post(perroController.insert);
    app.use('/api', router);
}

export default setRoutes;