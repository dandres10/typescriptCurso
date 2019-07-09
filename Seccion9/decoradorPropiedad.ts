class Planeta {
    @decoradorPropiedad
    nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
}


function decoradorPropiedad(objetivo: Object,propiedad:string){
    console.log(objetivo,"objetivo"); //toma toda la clase 
    console.log(propiedad, "propiedad");// toma los atributos de la clase 

    const respaldo = "respaldo"
    const getter = function (this:any){
        console.log(this[respaldo],"valor de propiedad")
        return this[respaldo] + "......"
    }

    const setter = function(this:any,valor:any){
        this[respaldo] = valor;
    } 

    Object.defineProperty(objetivo,propiedad,{
        get: getter,
        set: setter
    })
}


let planeta1 = new Planeta("Marte")
let planeta2 = new Planeta("Pluton")

console.log(planeta1.nombre)
console.log(planeta2.nombre)