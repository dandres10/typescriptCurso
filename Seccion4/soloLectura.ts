
interface Punto{
    readonly coordenadaX: number; //no se puede reasignar la variable
    readonly coordenadaY: number;
}


let punto1: Punto ={coordenadaX:34,coordenadaY:23};
let punto2: Punto ={coordenadaX:45,coordenadaY:54};
console.log(punto1.coordenadaX);
console.log(punto2.coordenadaX);