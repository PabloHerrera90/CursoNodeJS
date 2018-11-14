const Hapi = require('hapi');
const Ruta = require('./Rutas');

const server = Hapi.Server({
    host: 'localhost',
    port: 3000
});


server.route(Ruta);

async function start(){
    try{
        await server.start();
    } catch (error){
        console.log(error);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

start();