import * as express from 'express';
import * as morgan from 'morgan';
import { setMaxListeners } from 'process';
import * as path from 'path';

import setMongo from './mongo';
import setRoutes from './routes';

const{ join } = require('path');
const cors = require("cors");
var corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};

const app = express();
app.set('port', 3000);

app.use(express.json()); //mensaje de nuestro body {req, resp} es un json
app.use(cors(corsOption));
app.options("*", cors());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

async function main(): Promise<any> {
    try{
        await setMongo();
        setRoutes(app);
        app.listen(app.get('port'), ()=>console.log(`backend funciona en el puerto ${app.get('port')}`));

    }catch(error){
        console.error(error)
    }

}

app.use('/uploads', express.static(path.resolve('uploads')));

main();

export {app}