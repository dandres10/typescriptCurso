class Vehiculo {
    //Atributos 
    marca:string;
    fecha_creacion:string;
    color:string;
    puertas:number;
    kilometraje:number = 0;

    constructor(marca_:string,fecha_creacion_:string, color_:string,puertas_:number){
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
    }

    avanzar (){
        this.kilometraje = this.kilometraje + 100;
    }



}


let mi_vehiculo = new Vehiculo("Ford","209","color",2);

mi_vehiculo.avanzar();

console.log(mi_vehiculo.kilometraje);