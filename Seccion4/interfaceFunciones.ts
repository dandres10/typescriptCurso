interface Login {
    (email:string,password:string):boolean;
}

let sesion :Login;

sesion = function(email_:string,password_:string){
   if (email_.length > 10 && password_.length>10) {
       return true;
   }
   return false;
}



let compra:boolean;

compra = sesion("dandresleon64@gmail.com","64654654654654");

console.log(compra);