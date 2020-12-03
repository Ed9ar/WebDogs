import * as express from 'express';
import PerroController from './controllers/perroController';

function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();
    router.route("/perro").get(perroController.getAll);
<<<<<<< Updated upstream
=======
    router.route("/perros/count").get(perroController.count);
    router.route("/perro").post(perroController.insert);
    router.route("/perro/:id").get(perroController.get);
    router.route("/perro/:id").put(perroController.update);
    router.route("/perro/:id").delete(perroController.delete);
>>>>>>> Stashed changes
    app.use('/api', router);
}

export default setRoutes;