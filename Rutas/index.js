const Handlers = require('../Handlers');

const lista = [1,2,3];
module.exports = [
    {
        method: 'POST',
        path: '/carro',
        config:{
            pre:[
                {method: Handlers.preHandler.preValidar , assign: 'preTokenVal'}
            ]
        },
        handler:Handlers.carroHandler.agregarCarrosAsyncAwait
    },
    {
        method: 'GET',
        path: '/carro',
        config:{
            pre:[
                {method: Handlers.preHandler.preValidar , assign: 'preTokenVal'}
            ]
        },
        handler:Handlers.carroHandler.listarCarrosAsyncAwait
    },
    {
        method: 'PUT',
        path: '/carro/{index}',
        config:{
            pre:[
                {method: Handlers.preHandler.preValidar , assign: 'preTokenVal'}
            ]
        },
        handler:Handlers.carroHandler.ActualizarCarrosAsyncAwait
    },
    {
        method: 'DELETE',
        path: '/carro/{index}',
        config:{
            pre:[
                {method: Handlers.preHandler.preValidar , assign: 'preTokenVal'}
            ]
        },
        handler:Handlers.carroHandler.DeleteCarrosAsyncAwait
    },
    {
        method: 'POST',
        path: '/lista/{id}',
        handler: (req, h)=>{
            return {data: lista[req.params.id]};
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: Handlers.usuarioHandler.login
    },
    {
        method: 'POST',
        path: '/usuario',
        handler: Handlers.usuarioHandler.addUsuario
    },
    {
        method: 'GET',
        path: '/lista',
        handler: (req, h)=>{
            console.log(req.query);
            return {data: lista};
        }
    },
    {
        method: 'POST',
        path: '/lista',
        handler: (req, h)=>{
            lista.push(req.payload.data);
            return {data: lista};
        }
    },
    {
        method: 'PUT',
        path: '/lista/{index}',
        handler: (req, h)=>{
            lista[req.params.index] = req.payload.data;
            return {data: lista};
        }
    },
    {
        method: 'DELETE',
        path: '/lista/{index}',
        handler: (req, h)=>{
            lista.splice(req.params.index, 1);
            return {data: lista};
        }
    }
];