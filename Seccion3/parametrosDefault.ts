function asignarPosicion(nombre:string, numero:number, posicion:string="Defensa"):string{
    return `${nombre} jugara con el numero ${numero} en la posicion de ${posicion} `;
}

//los parametros por defecto son tratados por opcionales 
let jugador1: string = asignarPosicion("Andres", 10, "Delatero");
let jugador2: string = asignarPosicion("Andres", 23);
console.log(jugador1);