function multiplicar(x: number,y:number): number{
        return x*y;
}

let producto: number = multiplicar(2,4);
console.log(producto," producto");

let sumatoria:number = 0;

function sumar():void{
    ++sumatoria;
}


sumar();

console.log(sumatoria);