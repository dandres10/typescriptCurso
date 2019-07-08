class Instrumento{
    protected nombre:string;

    public constructor(nombre:string){
        this.nombre = nombre;
    }
}


class Piano extends Instrumento{
    private de_cuerda :boolean = false;

    public constructor(nombre:string){
        super(nombre);
    }

    public obtener_nombre():void{
        console.log(this.nombre)
    }
}


let mi_piano = new Piano("MI piano de cola");
mi_piano.obtener_nombre();