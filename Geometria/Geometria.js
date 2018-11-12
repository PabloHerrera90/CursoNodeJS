const Pi = 3.141516;

module.exports.RadioCirculo = (vPerimetro) => vPerimetro / (2 * Pi);
module.exports.PerimetroCirculo = (vRadio) => 2 * Pi * vRadio;

module.exports.AreaTriangulo = (vBase, vAltura)=> (vBase * vAltura) / 2;