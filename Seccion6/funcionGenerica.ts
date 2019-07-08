function elemento_random<T>(lista: T[]): T{
    let indice_random: number = Math.floor(Math.random()*lista.length)
    return lista[indice_random];
}



let numeros : number[] = [32,65,98];

let mi_numero:number = elemento_random(numeros);

console.log(mi_numero);


let letras:string[] = ["a","b","c"];
let mi_letra:string= elemento_random(letras);
console.log(mi_letra);