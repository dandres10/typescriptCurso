//import { pi, saludar, Jugador, Mascota,palabras } from './exportar';
import periodista from '../exportarDefault.ts/default';
import * as paquete from "./exportar";

//sin exportacion con *
/*console.log(pi);


saludar();
let messi:Jugador = new Jugador();
messi.nombre = "Messi";

let zeus:Mascota = {nombre:"zeus"}

palabras();

console.log(periodista.nombre +" "+ periodista.apellido);
periodista.preguntar("Que edad tienes?");*/


//con exportacion con *

console.log(paquete.pi);


paquete.saludar();
let messi:paquete.Jugador = new paquete.Jugador();
messi.nombre = "Messi";

let zeus:paquete.Mascota = {nombre:"zeus"}

paquete.palabras();

console.log(periodista.nombre +" "+ periodista.apellido);
periodista.preguntar("Que edad tienes?");












