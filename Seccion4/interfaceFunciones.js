var sesion;
sesion = function (email_, password_) {
    if (email_.length > 10 && password_.length > 10) {
        return true;
    }
    return false;
};
var compra;
compra = sesion("dandresleon64@gmail.com", "64654654654654");
console.log(compra);
