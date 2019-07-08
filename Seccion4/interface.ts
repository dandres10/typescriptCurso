interface Perro{
    //Atributo
    nombre:string;

}

function adoptar(mascota:Perro):void{
    console.log(`Yo adopte a ${mascota}`)
}

//de esta manera
let mi_mascota1 = {
    nombre: "toby"
}
//de esta otra manera ... pero es redundante 
//dado que la funcion solo aceptara un objeto de tipo Perro en los parametros
let mi_mascota2:Perro = {
    nombre: "toby"
}

adoptar(mi_mascota1);
