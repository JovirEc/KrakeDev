obtenerAleatorio = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorJuego;

    aleatorio = Math.random();
    numeroMultiplicado = aleatorio*3;
    numeroEntero = parseInt(numeroMultiplicado);
    valorJuego = numeroEntero+1;
    return valorJuego;
}
generarElemento = function(){
    let numero = obtenerAleatorio();
    if(numero == 1){
        return "Piedra"
    }else if(numero == 2){
        return "Papel"
    }else{
        return "Tijera"
    }

}
determinarGanador = function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1 == eleccionJugador2){
        return 0;
    }
    if(eleccionJugador1 == "Piedra"){
        if(eleccionJugador2 == "Tijera"){
            return 1;
        }else{
            return 2;
        }
    }
    if(eleccionJugador1 == "Papel"){
        if(eleccionJugador2 == "Piedra"){
            return 1;
        }else{
            return 2;
        }
    }
    if(eleccionJugador1 == "Tijera"){
        if(eleccionJugador2 == "Papel"){
            return 1;
       }else{
            return 2;
       }
    }
}
generarRuta = function(nombre){
    let ruta;
    if(nombre == "Piedra"){
        ruta = "./imagenes/piedra.png"
    }else if(nombre == "Papel"){
        ruta = "./imagenes/papel.png"
    }else if(nombre == "Tijera"){
        ruta = "./imagenes/tijera.png"
    }
    return ruta;
}