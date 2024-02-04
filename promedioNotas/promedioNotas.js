calcularPromedioNotas = function(){
    let nota1 = recuperarFloat("lblNota1");
    let nota2 = recuperarFloat("lblNota2");
    let nota3 = recuperarFloat("lblNota3");
    let cmpPromedio = calcularPromedio(nota1,nota2,nota3);
    promedio = "Su promedio es: "+cmpPromedio.toFixed(2);
    mostrarTexto("lblPromedio",promedio);
    if(cmpPromedio > 0 && cmpPromedio < 5){
        mostrarImagen("lblImagen","./imagenes/reprobado.gif");
        mostrarTexto("lblMensaje","REPROBADO");
    }else if(cmpPromedio >= 5 && cmpPromedio <= 8){
        mostrarImagen("lblImagen","./imagenes/bienHecho.gif");
        mostrarTexto("lblMensaje","BUEN TRABAJO");
    }else if(cmpPromedio > 8 && cmpPromedio <= 10){
        mostrarImagen("lblImagen","./imagenes/excelente.gif");
        mostrarTexto("lblMensaje","EXCELENTE");
    }else{
        mostrarImagen("lblImagen","./imagenes/incorrecto.gif");
        mostrarTexto("lblMensaje","DATOS INCORRECTOS");
    }
}

cambiarImage