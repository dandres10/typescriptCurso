"use strict";
function miFabrica(valor) {
    console.log("Esta es mi fabrica de decorador");
    return function (objetivo) {
        console.log("Este es mi decorador y hago algo con objetivo");
    };
}
