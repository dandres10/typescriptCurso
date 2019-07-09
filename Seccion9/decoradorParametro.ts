class Profesor {
    saludar(@decaradorParametro mensaje:string,mensaje2:string,@decaradorParametro mensaje3:string){
        console.log(mensaje);
    }
}


let cesar = new Profesor();
cesar.saludar("Hola estudiantes", "no se usa", "no se usa")
console.log(Object.getPrototypeOf(cesar));


function decaradorParametro(objetivo:Object,metodo:string,indice:number){
    const metadata = "indices_decoradores";

    if(Array.isArray(objetivo[metadata])){
        objetivo[metadata].push(indice);
    }else{
        objetivo[metadata] = [indice]
    }
}
