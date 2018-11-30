const jwt = require('jsonwebtoken');

module.exports.tokenSign = (payload) =>{
    try {
    let token = jwt.sign(payload,
        process.env.SECUREJWT,
        {expiresIn: '5d'});
    }
    catch (error){
        return error
    }
}