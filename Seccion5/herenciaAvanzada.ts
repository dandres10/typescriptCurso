class Animales{
    nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    caminar(distancia:number = 0):void{
        console.log(`${this.nombre} camino ${distancia} metros`)
    }
}


class Serpiente extends Animales{
    logitud:number;
    constructor(nombre:string, logitud:number){
        super(nombre);
        this.logitud = logitud;
    }

    caminar(distancia:number = 5){
        console.log("Dezlizando...")
        super.caminar(distancia);
    }
}


class Caballo extends Animales{
    logitud:number;
    constructor(nombre:string){
        super(nombre);
        
    }

    
}


let sam = new Serpiente("Sam",23);
let zeus = new Caballo("Zeus el caballo");

sam.caminar();