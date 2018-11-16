const Carro = require('../Models/Carro');

module.exports.agregarCarros = (req, h)=> {

    const carro = new Carro(req.payload.data);
    carro.save((err, data) => {
       if(err){
           console.log('Error', err)
           return h.response(err);
       }

       console.log('agregado');
       return h.respo('agregado');
    });
    return h.response(req.payload.data);
}