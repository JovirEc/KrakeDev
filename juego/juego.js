let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado){
    let computadora = generarElemento();
    let rutaPc = generarRuta(computadora);
    let rutaJg = generarRuta(seleccionado);
    let resultado = determinarGanador(seleccionado,computadora);

    if(resultado == 0){
        mostrarTexto("lblResultado1","EMPATE");
    }else if(resultado == 1){
        mostrarTexto("lblResultado1","GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario + 1;
    }else{
        mostrarTexto("lblResultado1","PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
    }
    mostrarImagen("lblImgPc",rutaPc);
    mostrarImagen("lblImgJugador",rutaJg);
    mostrarTexto("puntajeJugador",puntosUsuario);
    mostrarTexto("puntajeComputador",puntosComputador);
}