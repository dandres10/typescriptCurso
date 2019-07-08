class Trabajador{
    private nombre:string;

    get nombreCompleto():string{
        return this.nombre;
    }

    set colocarNombre(nombre:string){
        this.nombre = nombre;
    }

    
}

let empleado = new Trabajador();
empleado.colocarNombre = "Juan";
console.log(empleado.nombreCompleto);