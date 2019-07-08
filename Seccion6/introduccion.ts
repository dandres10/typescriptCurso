let casas_HP: string[] =["casa1","casa2","casa3"]

function sombrero(todasLasCasas: string[]):string{
    let indice_ramdom:number = Math.floor(Math.random()*todasLasCasas.length)
    console.log(indice_ramdom,"Indice")
    return todasLasCasas[indice_ramdom];
}
let mi_casa: string = sombrero(casas_HP);
console.log(`Bienvenido a ${mi_casa}`);


let materias: number[] = [20,12,40,36]

function materiasSemestre(materias:number []):number{
    let indice_ramdom:number = Math.floor(Math.random()*materias.length)
    return materias[indice_ramdom];
}

let misMaterias: number = materiasSemestre(materias);
console.log(`Debes cursar ${misMaterias} materias`)