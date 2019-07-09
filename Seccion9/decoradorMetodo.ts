class Estudiante {
    notas: number[];

    constructor(notas: number[]){
        this.notas = notas;
    }

   @modificarMetodo(false)
    obtenerNotas(){
        this.notas.forEach(nota => {
            console.log(nota);
        });
        return this.notas;
    }
    
}

//fabrica de decorador 
function modificarMetodo(valor:boolean){
    return function(objetivo:any,propiedad:string,descriptor:PropertyDescriptor){
        console.log(objetivo,"objetivo");
        console.log(propiedad,"propiedad");
        console.log(descriptor,"descriptor");
        descriptor.value = valor;
    }
}


let estudiante = new Estudiante([12,15,16,19])
estudiante.obtenerNotas