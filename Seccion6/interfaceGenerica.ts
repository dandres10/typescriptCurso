interface Datos<T = string> {
    nombre: T
}


let persona: Datos = { nombre: "Andres" }

let persona2: Datos<number> = { nombre: 654 }