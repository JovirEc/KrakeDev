validarPlaca = function(){
    let placa = recuperarTexto("lblPlaca");
    let hayError = validarEstructura(placa);
    if(hayError == null){
        mostrarImagen("lblImgPlaca","./img/placaValida.png");
        mostrarTexto("lblErrores","");
    }else{
        mostrarImagen("lblImgPlaca","./img/placaInvalida.png");
        mostrarTexto("lblErrores",hayError);
    }
}