function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var resultado = nombreCompleto("Andres", "Leon");
console.log(resultado);
function nombreCompleto2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    return nombre;
}
var resultado2 = nombreCompleto2("Andres");
console.log(resultado2);
