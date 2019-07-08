class Animal{
    caminar(distacia:number):void{
        console.log(`se mueve ${distacia} metros`)
    }
}


class Gato extends Animal{
    maullar():void{
        console.log("Miauuu");
    }
}



let gatito = new Gato();
gatito.caminar(10);
gatito.maullar();