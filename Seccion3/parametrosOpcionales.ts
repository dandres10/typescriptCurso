function nombreCompleto (nombre:string, apellido : string): string{
    return nombre+ " "+ apellido;
}

let resultado: string = nombreCompleto("Andres","Leon");
console.log(resultado);

function nombreCompleto2 (nombre:string, apellido? : string): string{
    if (apellido) {
        return nombre+ " "+ apellido;
    }
    return nombre;
}

let resultado2: string = nombreCompleto2("Andres");

console.log(resultado2);