const usuario = require('../Models/Usuario');
const jwt = require('jsonwebtoken');
const token = require('./token');

module.exports.addUsuario = async (req, h)=>{
    try {
        const usuarioAgregado = await usuario.create(req.payload.data);
        console.log('Async/Wait', usuarioAgregado);
    } catch (error) {
        return h.response(error);
    }   
}

module.exports.login = async (req, h)=>{
    try {
        const usuario = await usuario.findOne(req.payload.data);
        if(usuario === null){
            return {
                error: 'Credenciales incorrectas'
            }
        }        
        //TODO: generacion de token
        const newToken = token.tokenSign({user: req.payload.data.user});
        if(newToken.token){
            return {
                data: newToken
            }
        }
        else{
            return {
                error: newToken
            }
        }       

    } catch (error) {
        return h.response(error);
    }   
}

