function deportes(persona:string, ...deportes:string[]):string{
    console.log(deportes);
    return `A ${persona} le gusta los siguientes deportes ${deportes.join(",")}`;
}

console.log(deportes("Loco","futbol","beisbol","tennis"));