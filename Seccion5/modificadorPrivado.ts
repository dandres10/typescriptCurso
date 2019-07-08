class Jugador {

    private posicion:string;
    public constructor(posicion:string){
        this.posicion = posicion;
    }

    public obtenerPosicion(): void{
        console.log(this.posicion);
    }

    private obtenerPosicionPrivado():void{
        console.log(this.posicion);
    }
}

let Ronaldo = new Jugador("Delantero");
console.log(Ronaldo.obtenerPosicion());