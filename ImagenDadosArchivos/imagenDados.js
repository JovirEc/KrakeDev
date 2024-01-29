let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    if(lanzamientos>1){
    let resultado;
    resultado=lanzarDado();
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    }else if(lanzamientos==1){
        let resultado;
        let cmpMensaje;
        resultado=lanzarDado();
        mostrarCara(resultado);
        modificarPuntos(resultado);
        modificarLanzamientos();
        cambiarTexto("lblLanzamientos",lanzamientos);
        if(puntos>20){
            cmpMensaje = "¡GANASTE!";
            cambiarTexto("lblMensaje",cmpMensaje);
            cambiarBoton("lblBoton","Reinicar");
        }else{
            cmpMensaje = "GAME OVER";
            cambiarTexto("lblMensaje",cmpMensaje);
            cambiarBoton("lblBoton","Reiniciar");
        }
    }else{
        puntos = 0;
        lanzamientos = 5;
        cambiarTexto("lblPuntos","0");
        cambiarTexto("lblLanzamientos","5");
        cambiarTexto("lblMensaje","");
        cambiarBoton("lblBoton","Jugar");
        cambiarImagen("imgDados","dados0.png")
    }
}
modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos",puntos);
}

modificarLanzamientos = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
}
//Función mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al número que recibe
//no retorna nada
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDados","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDados","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDados","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDados","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDados","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDados","dados6.png");
    }
    
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}