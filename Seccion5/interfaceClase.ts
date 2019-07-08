interface DatosPersonales {
    nombre: string;
    apellido: string;
}


class Estudiante implements DatosPersonales {
    nombre: string;
    apellido: string;


}

let estudiante =  new Estudiante();
estudiante.nombre = "David";
estudiante.apellido = "Leon";

console.log(estudiante);