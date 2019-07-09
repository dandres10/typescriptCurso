function miFabrica(valor:string){
    console.log("Esta es mi fabrica de decorador");
    return function (objetivo:any){
        console.log("Este es mi decorador y hago algo con objetivo")
    }
}


