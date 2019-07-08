function asignarPosicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "Defensa"; }
    return nombre + " jugara con el numero " + numero + " en la posicion de " + posicion + " ";
}
//los parametros por defecto son tratados por opcionales 
var jugador1 = asignarPosicion("Andres", 10, "Delatero");
var jugador2 = asignarPosicion("Andres", 23);
console.log(jugador1);
