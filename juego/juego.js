jugar = function(seleccionado){
    let computadora = generarElemento();
    let rutaPc = generarRuta(computadora);
    let rutaJg = generarRuta(seleccionado);
    let resultado = determinarGanador(seleccionado,computadora);

    if(resultado == 0){
        mostrarTexto("lblResultado1","EMPATE");
    }else if(resultado == 1){
        mostrarTexto("lblResultado1","GANASTE LA PARTIDA");
    }else{
        mostrarTexto("lblResultado1","PERDISTE LA PARTIDA");
    }
    mostrarImagen("lblImgPc",rutaPc);
    mostrarImagen("lblImgJugador",rutaJg);
}