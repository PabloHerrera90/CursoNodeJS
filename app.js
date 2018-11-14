const modulo = require('./MiPrimerModulo');
const mGeometria = require('./Geometria/Geometria');

console.log(modulo.RestaNumeros(1, 4));
console.log(modulo.SumaNumeros(1,4));

console.log(`el radio del circulo es: ${mGeometria.RadioCirculo(10)}` );
console.log(`el radio del circulo es: ${mGeometria.PerimetroCirculo(1.59)}`);
console.log(`el radio del circulo es: ${mGeometria.AreaTriangulo(10,5)}`);