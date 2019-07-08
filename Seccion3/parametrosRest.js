function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    console.log(deportes);
    return "A " + persona + " le gusta los siguientes deportes " + deportes.join(",");
}
console.log(deportes("Loco", "futbol", "beisbol", "tennis"));
