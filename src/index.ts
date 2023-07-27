// DOTENV
const PROD = process.env.PRODUCTION || false;
if(PROD == false){
    const {config} = require('dotenv');
    config();
}

// IMPORTS
import fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './routes';

async function start():Promise<void>{
    const app = fastify({logger:true});
    await app.register(cors);
    require('./database');

    // ROUTES
    new routes(app, '/api/update/serie').router();

    // SERVER
    const PORT:number = typeof process.env.PORT == 'number' ? process.env.PORT : Number(process.env.PORT) ? Number(process.env.PORT) : 4560;
    const HOST:string = process.env.HOST || 'localhost';
    app.listen({port:PORT, host:HOST}, (_err, _address)=>{
        console.info(_address);
        console.log(`Sever run in ${HOST}:${PORT}`);
        console.error(_err);
    });
}

start();