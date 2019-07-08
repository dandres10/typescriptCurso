interface Informacion {
    nombre: string;
    apellido: string;
}


class Periodista implements Informacion {
    nombre: string;
    apellido: string;

    preguntar(mensaje: string): void {
        console.log(mensaje);
    }


}

let periodista = new Periodista();
periodista.nombre ="Loco";
periodista.apellido ="rey";



export default periodista;