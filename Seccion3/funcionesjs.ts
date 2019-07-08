//funciones en javascript

function multiplicar(numero1 ,numero2){
    return numero1*numero2;
}

let resultado = multiplicar(5,9);

console.log(resultado);


let laCuenta = 100;

function aumentarLaCuenta(valor){
    laCuenta = laCuenta + valor;
}

aumentarLaCuenta(20);

console.log(laCuenta);