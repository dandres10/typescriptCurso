abstract class SuperClase {
    abstract metodoSobreEscribir():void;
    saludar():void{
        console.log("Hola")
    }
}



class ClaseDerivada extends SuperClase{

    metodoSobreEscribir(): void {
        console.log("Codigo nuevo");
    }
    
}


let instancia = new ClaseDerivada();
instancia.saludar();
instancia.metodoSobreEscribir();