interface Casa{
    ancho: number;
    largo:number;
    alto?:number;

}


function dimenciones(medidas:Casa): string{
    let area: number = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return `El area de tu casa es ${area} mts y de alto ${medidas.alto} mts`;
    }
    return `El area de tu casa es ${area} mts`;
}

console.log(dimenciones({ancho:10,largo:12,alto:3}));
console.log(dimenciones({ancho:10,largo:12}));