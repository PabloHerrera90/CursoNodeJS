require('dotenv').config();
const Hapi = require('hapi');
const Routes = require('./Rutas');
const db = require('./Config/database').db;

const server = Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.ext('onPreResponse', (req,h) =>{
    if(request.response != null && request.response.header != null){
        request.response.header('Access-Control-Allow-Origein','*');
        request.response.header('Access-Control-Allow-Headers','Content-Type,Token');
        request.response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        console.log(require.headers);
    }
    return h.continue;
});

server.route(Routes);

async function start(){
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

start();