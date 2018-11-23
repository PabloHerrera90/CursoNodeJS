const Carro = require('../Models/Carro');

module.exports.agregarCarrosCB = (req, h)=>{
    const carro = new Carro(req.payload.data);
    return new Promise((resolve, reject)=>{
        ////CB save------------------
        let car = carro.save((err, carro)=>{
            if(err){
                return reject(err);
            }
            Carro.update({_id: res._id}, documento, (err, raw)=>{
                if(err){
                    return reject(err);
                }
                return resolve(raw);
            });
            return resolve(carro);
        });

        //--------------------------
    });
}

module.exports.agregarCarrosPromise = (req, h)=>{
    return Carro.create(req.payload.data)
    .then(res => Carro.update({_id: res._id}, documento))
    .then(res2 => h.response(res2))
    .catch(err => h.response(err));
}

module.exports.agregarCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if (preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }

        const carroAgregado = await Carro.create(req.payload.data);
        console.log('Async/Wait', carroAgregado);
        console.log(await fAsync());
        return h.response(carroAgregado);
    } catch (error) {
        return h.response(error);
    }   
}

module.exports.listarCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if (preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }

        if(!req.query.id){
            return await Carro.find();
        }
         return  await Carro.findById({_id: req.query.id});;
    } catch (error) {        
        return h.response(error);
    }   
}

module.exports.buscarCarrosAsyncAwait = async (req, h)=>{
    try {
        const carro = await Carro.findById({id: req.paramas.id});
        return h.response(carro);
    } catch (error) {
        return h.response(error);
    }   
}

module.exports.ActualizarCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if (preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }
        
        const carroActualizado = await Carro.findByIdAndUpdate(req.params.index,
            req.payload.data)
            
        return h.response(carroActualizado);

    } catch (error) {
        return h.response(error);
    }   
}

module.exports.DeleteCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if (preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }

        const carroDelete = await Carro.findByIdAndDelete (req.params.index,
            req.payload.data)
        return h.response(carroDelete);
    } catch (error) {
        return h.response(error);
    }   
}

const fAsync = async() =>{
    return 'hola mundo';
}