const numero1 = 1;
const numero2 = 2;

let num1 = 1;
let num2 = 2;

if (true){
    const resultado = numero1 + numero2;
    let res = num1 + num2; 

    console.log(`Resultado var: ${resultado}, Resultado let: ${res}`);
}


let arreglo = [1,2,3,4,5];
let objeto = {
    att: 'hola mundo',
    att2: 'hola mundo 2'
}
console.log(arreglo,objeto);

process.argv.forEach((value, index)=>{
    console.log(`indice: ${index}, value: ${value}`);
});

for(let i=0; i< process.argv.length; i++){
    console.log(`indice: ${i}, value: ${process.argv[i]}`);
}

let funcion = (param1, param2)=> param1 + param2;

console.log(`funcion : ${funcion(6,5)}`);