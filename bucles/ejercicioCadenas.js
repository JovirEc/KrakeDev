ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadena = function(cadena){
    //0123
    //Juan
    let caracter;

    for(let posicion=0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0; posicion <= cadena.length-1; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+ " posicion "+posicion);
    }
}

ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");//"HOLA"
    invertirCadena(mensaje);
}

invertirCadena = function(cadena){
    let caracter;
    let caracter2;
    let resultado="";
    caracter = cadena.length-1

    for(let i=cadena.length-1; i>=0; i--){
        caracter2 = cadena.charAt(caracter);
        resultado = resultado + caracter2;
        caracter = caracter-1;
    }
    mostrarTexto("lblResultado",resultado);
}