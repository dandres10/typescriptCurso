class Persona{
    public nombre:string;
    public constructor(nombre:string){
        this.nombre = nombre;
    }

    public hablar(mensaje:string):void{
        console.log(mensaje);
    }
}



let instancia = new Persona("Juan");
console.log(instancia.nombre);
instancia.hablar("hola");