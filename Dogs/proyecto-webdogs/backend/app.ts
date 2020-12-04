import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import { setMaxListeners } from 'process';

import setMongo from './mongo';
import setRoutes from './routes';

const app = express();
app.set('port', 3000);

app.use(express.json());
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