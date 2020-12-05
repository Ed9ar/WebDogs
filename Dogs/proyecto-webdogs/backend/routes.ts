import * as express from 'express';
import { Express } from 'express-serve-static-core';
import PerroController from './controllers/perroController';
import DenunciaController from './controllers/denunciaController';
import multer from './libs/multer';

//jwt
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');/// npm
///fin de jwt npm install jsonwebtoken

function setRoutes(app):void{
    const router = express.Router();
    const perroController = new PerroController();

    router.use((req, res, next) => {
      res.set("Access-Control-Allow-Origin", "*");
      res.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === "OPTIONS") {
        res.set(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
      }
      next();
    }); //funcion habilita el middleware

    var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-55arag8d.us.auth0.com/.well-known/jwks.json'
      }),
      audience: 'http://localhost:3000/',
      issuer: 'https://dev-55arag8d.us.auth0.com/',
      algorithms: ['RS256']
    });

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
    router.route("/denuncia/:id").get(denunciaController.get);
    router.route("/denuncia/:id").put(denunciaController.update);
    router.route("/denuncia/:id").delete(denunciaController.delete);

    //app.use(jwtCheck);
    app.use('/api', router);
}

export default setRoutes;
