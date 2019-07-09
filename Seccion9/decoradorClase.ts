

//crear un decorador es crear una funcion y actualizar su nombre como una etiqueta en otra parte


function imprimir(clase:Function){
    clase.prototype.nombre = "Andres";
    console.log(clase.prototype);
}


@imprimir
class Persona{
    mensaje:string = "Hola a todos";
    saludar(){
        console.log(this.mensaje);
    }
}


let yo: Persona = new Persona();
yo.saludar();


let tu: Persona = new Persona();
tu.saludar()