function entrando(clase: Object) {
    console.log("primer decorador");
}

function Imprimiento(clase: Object) {
    console.log("primer decorador");
}



@entrando
@Imprimiento
class Animal {
    raza: string = "Perro";
}


let miMascota: Animal = new Animal();

