export const pi:number = 3.14;


export function saludar(): void{
    console.log("Hola");
}

export class Jugador{
    nombre:string;
}

export interface Mascota{
    nombre:string;
}


function trabalenguas(): void{
    console.log( `slkajhflkasjhdfkljahsdklfhalksjhdf
    alksjhdflkajshdflkjhalksjdf
    alksjhdflkahsdlkjhflakjshdf
    aklsjhdflkjhasdfjhasd`   )
      
}


export {trabalenguas as palabras}