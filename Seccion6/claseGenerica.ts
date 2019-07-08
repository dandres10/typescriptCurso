class Unificador<T> {
    valor: T;
    sumar: (valor1: T,valor2:T) =>T;
}

//la T simboliza un number 

let mi_unificador = new Unificador<number>();
mi_unificador.valor=20;
mi_unificador.sumar = function(valor1,valor2){
    return valor1 + valor2;
}


console.log(mi_unificador.sumar(2,3));

//la T simboliza un string 


let mi_unificador2 = new Unificador<string>();

mi_unificador2.valor = "20";

mi_unificador2.sumar = function(valor1,valor2){
    return valor1 + valor2;
}


console.log(mi_unificador2.sumar("2","3"));